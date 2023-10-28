import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";
import nodemailer from 'nodemailer';
import RequireLogin from "../middlewares/requireLogin.js"
import POST from "../db/post.js";
//import Chat from "../db/chatModel.js";
//import Message from "../db/messageModel.js";
import blog from "../db/blog.js";
import MESSAGE from "../db/messageModel.js";
import CHAT from "../db/chatModel.js";
const User = mongoose.model("USER")
const Post = mongoose.model("POST")
const Chat = mongoose.model("CHAT")
const BLOG = mongoose.model("BLOG")
const Message = mongoose.model("MESSAGE")
const router = express.Router();

router.post("/signup", (request, response) => {
    // hash the password
    bcrypt
      .hash(request.body.password, 10)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        
        const user = new User({
          email: request.body.email,
          password: hashedPassword,
          fullName : request.body.fullName ,
          CollageName : request.body.CollageName ,
          Graduated_year : request.body.Graduated_year ,
         Enter_mobile_Number : request.body.Enter_mobile_Number ,
          Enter_your_location : request.body.Enter_your_location ,
           Company_Name : request.body.Company_Name
        });
  
        // save the new user
        user
          .save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            response.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          // catch error if the new user wasn't added successfully to the database
          .catch((error) => {
            response.status(500).send({
              message: "Error creating user",
              error,
            });
          });
      })
      // catch error if the password hash isn't successful
      .catch((e) => {
        response.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
      });
  });
   
// to get user profile
router.get("/myposts", RequireLogin, (req, res) => {
  POST.find({ postedBy: req.user._id })
      .populate("postedBy", "_id name")
      
      .sort("-createdAt")
      .then(myposts => {
          res.json(myposts)
      })
})


  router.get("/allposts", (req, res) => {
    POST.find()
        .populate("postedBy", "_id Photo email")
        //.populate("comments.postedBy", "_id name")
        //.sort("-createdAt")
        .then(posts => res.json(posts))
        .catch(err => console.log(err))
})


  router.post('/login', (req, resp) => {
    const { email, password } = req.body;
  
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          return resp.status(404).send({
            message: "email not found",
          });
        }
  
        bcrypt.compare(password, user.password)
          .then((match) => {
            if (match) {
              const token = jwt.sign(
                {
                  _id: user.id,
                },
                "RANDOM" // Secret key
              );
              const { _id, email } = user;
              resp.status(200).json({ token, user: { _id, email } });
            } else {
              console.log("Password mismatch:", password, user.password);
              resp.status(400).send({
                message: "Passwords do not match",
              });
            }
          })
          .catch((error) => {
            console.error("Error comparing passwords:", error);
            resp.status(400).send({
              message: "Error comparing passwords",
              error,
            });
          });
      })
      .catch((e) => {
        console.error("Email not found:", e);
        resp.status(404).send({
          message: "Email not found",
          e,
        });
      });
  });

  router.post("/createPost",RequireLogin, (req, res) => {
    const { body, pic } = req.body;
    console.log(pic)
    if (!body || !pic) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    console.log(req.user)
    const post = new POST({
        body,
        photo: pic,
        postedBy: req.user
    })
    post.save().then((result) => {
        return res.json({ post: result })
    }).catch(err => console.log(err))
})

router.put('/like', RequireLogin, async (req, res) => {
  try {
    const result = await POST.findByIdAndUpdate(
      req.body.postId,
      { $push: { likes: req.user._id } },
      { new: true }
    )
      .populate('postedBy', '_id Photo');
    res.json(result);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});

router.put('/unlike', RequireLogin, async (req, res) => {
  try {
    const result = await POST.findByIdAndUpdate(
      req.body.postId,
      { $pull: { likes: req.user._id } },
      { new: true }
    )
      .populate('postedBy', '_id Photo');
    res.json(result);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});

router.put('/comment', RequireLogin, async (req, res) => {
  const comment = {
    comment: req.body.text,
    postedBy: req.user._id,
  };

  try {
    const result = await POST.findByIdAndUpdate(
      req.body.postId,
      { $push: { comments: comment } },
      { new: true }
    )
      .populate('comments.postedBy', '_id')
      .populate('postedBy', '_id Photo');
    res.json(result);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});

router.post('/send-email', async (req, res) => {
  const { Name, Email, phone, message } = req.body;

  // Configure Nodemailer to send the email
  const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail'
      auth: {
          user: 'vikassharma4733@gmail.com',
          pass: 'ohgw pkzs cglw znze',
      },
  });

  const mailOptions = {
      from: 'vikassharma4733@gmail.com',
      to: 'vikassharma4733@gmail.com',
      subject: 'Contact Form Submission',
      text: `Name: ${Name}\nEmail: ${Email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
      await transporter.sendMail(mailOptions);
      res.sendStatus(200); // Send a success response
  } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' }); // Send an error response
  }
});
  
// Api to delete post
router.delete("/deletePost/:postId", RequireLogin, async (req, res) => {
  try {
    const post = await POST.findOne({ _id: req.params.postId }).populate("postedBy", "_id");

    if (!post) {
      return res.status(422).json({ error: "Post not found" });
    }

    if (post.postedBy._id.toString() === req.user._id.toString()) {
      await POST.deleteOne({ _id: req.params.postId }); 

      return res.json({ message: "Successfully deleted" });
    } else {
      return res.status(403).json({ error: "You are not authorized to delete this post" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// User profile endpoint without 'exec'
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const posts = await POST.find({ postedBy: req.params.id }).populate("postedBy", "_id");
    res.status(200).json({ user, posts });
  } catch (err) {
    return res.status(422).json({ error: err.message });
  }
});


// To follow user
router.put("/follow", RequireLogin, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.body.followId,
      { $push: { followers: req.user._id } },
      { new: true }
    );

    const currentUser = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { following: req.body.followId } },
      { new: true }
    );

    res.json(currentUser);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});

// To unfollow user
router.put("/unfollow", RequireLogin, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.body.followId,
      { $pull: { followers: req.user._id } },
      { new: true }
    );

    const currentUser = await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { following: req.body.followId } },
      { new: true }
    );

    res.json(currentUser);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});
// To upload profile pic
router.put("/uploadProfilePic", RequireLogin, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { $set: { Photo: req.body.pic } },
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
});
//now lets start our chat section
router.post("/chat", async (req,res)=>{
  const newChat = new CHAT({
    members:[req.body.senderId,req.body.receiverId],
  });
  try{
    const result  = await newChat.save();
    res.status(200).json(result);

  }catch(error){
    res.status(500).json(error);
   
  }
})

router.get("/chat/:userId", async (req,res)=>{
  try{
    const chatya = await CHAT.find({
      members:{$in:[req.params.userId]},
    });
    res.status(200).json(chatya);
  }
  catch(error){
    res.status(500).json(error);
  }
})

router.get("/find/:firstId/:secondId",async (req,res)=>{
  try{
    const chatyaa = await CHAT.findOne({
      members:{$all:[req.params.firstId,req.params.secondId]}
    });
    res.status(200).json(chatyaa)
  }catch(error){
    res.status(500).json(error)
  }
})

router.post("/message",async(req,res)=>{
  const {chatId,senderId,text} = req.body;
  const message = new MESSAGE({
    chatId,
    senderId,
    text,
  });
  try{
    const result = await message.save()
    res.status(200).json(result);
  }catch (error) {
    res.status(500).json(error);
  }
})

router.get("/message/:chatId",async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await MESSAGE.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
})

//blog routes
router.post("/createBlog",RequireLogin,async (req, res) => {
  const { title,description,createdDate, pic } = req.body;
    // console.log(pic)
    // if (!body || !pic) {
    //     return res.status(422).json({ error: "Please add all the fields" })
    // }
  try {
      const newBlog = await new BLOG({
        title,
        description,
        picture:pic,
        createdDate,
        postedBy: req.user
      });
      newBlog.save();

      res.status(200).json('Post saved successfully');
  } catch (error) {
      res.status(500).json(error);
  }
})

router.get("/allblog", (req, res) => {
  BLOG.find()
      .populate("postedBy", "_id Photo email")
      //.populate("comments.postedBy", "_id name")
      //.sort("-createdAt")
      .then(blog => res.json(blog))
      .catch(err => console.log(err))
})

router.get("/blogbyid/:id",RequireLogin,async (request, response) => {
  try {
      const blog = await BLOG.findById(request.params.id);
    
      response.status(200).json(blog);
  } catch (error) {
      response.status(500).json(error)
  }
})
//search
router.get('/api/users/:username', async (req, res) => {
  const { username } = req.params;

  //console.log('Searching for user with email:', email);

  try {
    const user = await User.findOne({ email : username});
    console.log('User found:', user);

    if (!user) {
     res.status(404).json({ message: 'User not found' });
    }
    const posts = await Post.find({ postedBy: user._id });

    res.json({ user, posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


export default router