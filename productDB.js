import connectDB from "./db/connect.js";
import product from "./models/product.js";
import dotenv from "dotenv";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prductJson = require("./product.json");

dotenv.config()

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await product.deleteMany();
        await product.create(prductJson)
        console.log("success data added")
    } catch (error) {
        console.log(error)
    }
}

start();