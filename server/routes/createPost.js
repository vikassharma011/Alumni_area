// import  express from "express";
// import mongoose from "mongoose";
// import RequireLogin from "../middlewares/requireLogin.js"
// const router1 = express.Router();
// const POST = mongoose.model("POST")

// router1.post("/createPost", RequireLogin, (req, res) => {
//     const { body, title } = req.body;
//     console.log(pic)
//     if (!body || !title) {
//         return res.status(422).json({ error: "Please add all the fields" })
//     }
//     console.log(req.user)
//     const post = new POST({
//         body,
//         photo: pic,
//         postedBy: req.user
//     })
//     post.save().then((result) => {
//         return res.json({ post: result })
//     }).catch(err => console.log(err))
// })
// export default router1