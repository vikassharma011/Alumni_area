import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import User from "./db/userModel.js";
//import Home from "./auth.js"
import express from "express"
import cors from "cors"
import router from "./routes/auth.js";
import dbConnect from "./db/dbConnect.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

app.use(cors());
//const url = 'http://localhost:8000';
app.use(router)

app.get("/profile/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log(userId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// authentication endpoint
// app.get("/home",Home, (request, response) => {
//   response.json({ message: "You are authorized to access me" });
// });
//serving the frontend
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function(err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

  const PORT = process.env.port || 8000
app.listen(PORT,()=>console.log(`server is running succefully in ${PORT}`))

dbConnect();//connect from the mongodb database