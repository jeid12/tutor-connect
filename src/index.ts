import "dotenv/config";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./config/database";
import authRoutes from "./routes/authRoutes";

const app = express();
const PORT = process.env.PORT|| 3000;
app.use(express.json());

app.use("/api/auth", authRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.error("Database connection error", err));
