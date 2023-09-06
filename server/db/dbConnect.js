import mongoose from "mongoose"
import dotenv from "dotenv"
//const URL = "mongodb://vikas:isa123@ac-wl0tzxg-shard-00-00.klmfzp0.mongodb.net:27017,ac-wl0tzxg-shard-00-01.klmfzp0.mongodb.net:27017,ac-wl0tzxg-shard-00-02.klmfzp0.mongodb.net:27017/?ssl=true&replicaSet=atlas-xcd22q-shard-0&authSource=admin&retryWrites=true&w=majority"
dotenv.config();
const dbConnect = async()=> {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        process.env.DB_URL,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

export default dbConnect
