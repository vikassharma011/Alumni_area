import mongoose from "mongoose";
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
})

const User = mongoose.model('USER',UserSchema);
export default User;