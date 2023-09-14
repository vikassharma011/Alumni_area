import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
import User from "./db/userModel.js";
import Home from "./auth.js"
import express from "express"
import cors from "cors"
import dbConnect from "./db/dbConnect.js";



const app = express();
app.use(express.json());
app.use(cors());
//const url = 'http://localhost:8000';

app.post("/signup", (request, response) => {
    // hash the password
    bcrypt
      .hash(request.body.password.trim(), 10)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new User({
          email: request.body.email,
          password: request.body.password,
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
  //to send data to server
  app.post('/login',(req,resp)=>{
    User.findOne({ email: req.body.email })
    //console.log(email)//check the user is the email is present or not 
    .then((user)=>{
      // if (!user) {
       // return resp.status(404).send({
         // message: "Email not found",
        //});
      //}
      bcrypt.compare(req.body.password.trim(), user.password).then((passwordCheck)=>{
        
        const token = jwt.sign(
          {
            userId:user._id,
            userEmail:user.email
          },
          "RANDOM-TOKEN",
          { expiresIn: "24h" }
        );
        resp.status(200).send({
          message: "Login Successful",
          email: user.email,
          token,
        });
      })
      .catch((error) => {
        resp.status(400).send({
          message: "Passwords does not match",
          error,
        });
      });
      
   })
    .catch((e) => {
      resp.status(404).send({
        message: "email not found",
        e,
      })
  });
  
});




// authentication endpoint
app.get("/home",Home, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});


  const PORT = 8000;
app.listen(PORT,()=>console.log(`server is running succefully in ${PORT}`))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

dbConnect();//connect from the mongodb database