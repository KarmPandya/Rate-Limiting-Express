import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import peopleRoutes from './routes/PeopleRoutes.js';
import { connectDB } from "./config/db.js";
import { rateLimit } from 'express-rate-limit';
import helmet from 'helmet';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

// Rate Limiter
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // Maximum 5 requests
  // if we hit the API for more than 5 times the error will be : 429 Too Many Requests
  message: "Too many requests, try again later."
});
app.use(limiter);

// Helmet for security
app.use(helmet());

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server running successfully 🚀",
  });
});

app.use("/api/people", peopleRoutes);

// Start Server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

