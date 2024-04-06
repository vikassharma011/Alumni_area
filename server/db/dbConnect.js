import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
<<<<<<< HEAD

=======
>>>>>>> 4cb0d74c547e6f37319d5b1e826ab7ebcb28c162
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
