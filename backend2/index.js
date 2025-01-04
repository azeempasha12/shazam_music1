import  express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// routes
app.use("/api/user",userRoutes);

app.get("/", (req,res) =>{
    res.status(200).send("welcome to shazam music app");
})


const PORT = process.env.PORT ||  3000
connectDB()
app.listen(PORT, () =>{
    console.log(`server is listening to port number ${PORT}`);
})