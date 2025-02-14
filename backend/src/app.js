import express, { json } from "express";
import { connectDb } from "./Connection/Connect.js";
import cors from "cors";
import route from "./routes/UserRoutes.js";
import item_route from "./routes/itemRoutes.js";
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT | 3000

const app = express();
app.use(cors());

connectDb();

app.use(express.json())

// user route
app.use('/user', route)

// item routes
app.use('/item', item_route)



app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
