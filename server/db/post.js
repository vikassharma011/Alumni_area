import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        require: true
    },
    postedBy: {
        type: ObjectId,
        ref: "USER"
    }
})

const POST = mongoose.model('POST', postSchema);

export default POST;
