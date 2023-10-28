
import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
    {
        members:{
            type:Array,
        },
    },
    {
        timestamps:true,
    },
    
);

const CHAT = mongoose.model("CHAT",ChatSchema)
export default CHAT