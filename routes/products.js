import express from "express";
import { getAllProducts, getAllProductsTesting, getAllGames } from "../controllers/products.js"


const router = express.Router();

router.route("/").get(getAllProducts)
router.route("/testing").get(getAllProductsTesting)
router.route("/play").get(getAllGames)


export default  router;






















