import mongoose from 'mongoose';

const {ObjectId} = mongoose.Schema.Types

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: false,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    
    categories: {
        type: Array,
        required: false   
    },
    createdDate: {
        type: Date
    },
    postedBy: {
        type: ObjectId,
        ref: "USER"
    }
}, { timestamps: true }
);


const blog = mongoose.model('BLOG', BlogSchema);

export default blog;