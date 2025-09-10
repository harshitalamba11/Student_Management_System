import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Student from "./Routes/Student.js";

const app = express();
const PORT = 5000;

// allow frontend to talk to backend
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// routes
app.use("/students", Student);

// database
await mongoose.connect("mongodb://127.0.0.1:27017/school");
console.log("✅ Connected to MongoDB");

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
