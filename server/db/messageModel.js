import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        chatId:{
            type:String,
        },
        senderId:{
            type:String,
        },
        text:{
            type:String,
        }
    },
    {
        timestamps:true,
    },
    
)

const MESSAGE = mongoose.model("MESSAGE",MessageSchema);
export default MESSAGE