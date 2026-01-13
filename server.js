import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import PeopleRoutes from './routes/PeopleRoutes.js'
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Server Running Successfully");
})

app.use('/api/people', PeopleRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

