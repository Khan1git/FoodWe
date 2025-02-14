import express from "express";
const route = express.Router();
import { addItem } from "../controllers/ItemControllers/itemController.js";

// Items
route.post("/add-item", addItem);

export default route;
