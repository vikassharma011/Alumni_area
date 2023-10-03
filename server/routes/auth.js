import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";
import RequireLogin from "../middlewares/requireLogin.js"
import POST from "../db/post.js";
const User = mongoose.model("USER")
const Post = mongoose.model("POST")
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
                "RANDOM" // Replace with your actual JWT secret
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
    const { body, title } = req.body;
    //console.log(pic)
    if (!body || !title) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    console.log(req.user)
    const post = new Post({
        body,
        title,
        
        postedBy: req.user
    })
    post.save().then((result) => {
        return res.json({ post: result })
    }).catch(err => console.log(err))
  })
  
  

export default router