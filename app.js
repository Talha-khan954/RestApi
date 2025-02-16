import express from "express";
import productsRoutes from "./routes/products.js"
import connectDB from "./db/connect.js";
import dotenv from "dotenv"

const app = express();
dotenv.config()
const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {

    res.send("Ma Abhi Live Chal Rha Hon")

});

app.use("/api/products", productsRoutes)



const start = async () => {

    await connectDB();
    try {
        app.listen(PORT,console.log(`SERVER CONNECT HO GAYA HAI PORT NO ${PORT} PER`))
    } catch (error) {
        console.log("ye error a rha hai", error)
    }
}

start();