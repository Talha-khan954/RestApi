import mongoose from "mongoose";


const connectDB = async () => {

    console.log("connected DB")

await mongoose.connect(process.env.MONGO_URI)
};


export default connectDB;
