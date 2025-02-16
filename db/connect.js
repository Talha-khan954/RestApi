import mongoose from "mongoose";

// const uri = "mongodb+srv://restapi:restapi@restapi.qavdy.mongodb.net/"


const connectDB = async () => {

    console.log("connected DB")

await mongoose.connect(process.env.MONGO_URI)
};


export default connectDB;