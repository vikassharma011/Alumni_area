import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types
//create a user table or collection if there is no table with that name already
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
      },
    
      password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
      },
      Photo: {
        type: String,
    },
    followers: [{ type: ObjectId, ref: "USER" }],
    following: [{ type: ObjectId, ref: "USER" }]
})

const User = mongoose.model('USER',UserSchema);
export default User;