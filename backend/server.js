import express from "express";
import cookieParser from "cookie-parser";
import env from "dotenv";
import userRoute from './routes/user.route.js';
import postRoute from './routes/post.route.js';
import bodyParser from "body-parser";
import cors from "cors";

env.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://uwu-codegen-1.onrender.com',
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//test
import prisma from "./db/db.config.js";
app.get("/api/test-db", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});


// Routes
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);

app.listen(PORT, () => {
  console.log(`🐾 UwU Server running on http://localhost:${PORT}`);
});
