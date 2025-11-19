import express, { json } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import cors from "cors";
import TodoRoute from "./routes/todoRoutes.js";

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT;

// CORS configuration
const allowedOrigins = [
  "https://vivek.code4bharat.com",
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(json());

// Test Route
app.get("/", (req, res) => {
  res.send("server is running");
});

// Routes
app.use("/api/todos", TodoRoute);

app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
});
