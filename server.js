import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import peopleRoutes from './routes/PeopleRoutes.js';
import { connectDB } from "./config/db.js";
import { rateLimit } from 'express-rate-limit'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs : 5 * 60 * 1000, // 5 mins
  limit : 5,
  message : "Too many requests, try again after some time"
})

app.use(limiter);


const startServer = async () => {
  try {
    await connectDB();

    app.use(cors({ origin: process.env.CLIENT_URL || "*" }));

    //  -------------------- Routes -------------------- 
    app.get("/", (req, res) => {
      res.status(200).json({
        success: true,
        message: "Server running successfully 🚀",
      });
      res.send("Server running successfully")
    });

    app.use("/api/people", peopleRoutes);

    //  -------------------- Start Server -------------------- 
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });


  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

