import express, { json } from "express";
import { connectDb } from "./Connection/Connect.js";
import cors from "cors";
import route from "./routes/UserRoutes.js";
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT | 3000

const app = express();
app.use(cors());

connectDb();

app.use(express.json())
app.use('/user', route)


app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
