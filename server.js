import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/',(req, res)=>{
    res.send("Server Running Successfully");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

