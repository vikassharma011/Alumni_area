import bcrypt from "bcrypt"
import User from "./db/userModel.js";
import express from "express"
import dbConnect from "./db/dbConnect.js";

const app = express();
app.use(express.json());

app.post("/signup", (request, response) => {
    // hash the password
    bcrypt
      .hash(request.body.password, 10)
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
  const PORT = 8000;
app.listen(PORT,()=>console.log(`server is running succefully in ${PORT}`))

  
dbConnect();//connect from the mongodb database