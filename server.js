import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import Router from "./routes/Routes.js";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

ConnectDB();

app.use("/api/v1/", Router);

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
