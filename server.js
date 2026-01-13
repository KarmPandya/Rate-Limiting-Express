import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import peopleRoutes from './routes/PeopleRoutes.js';
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


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

