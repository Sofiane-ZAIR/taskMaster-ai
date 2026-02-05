import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./dataBase/db";
import routes from "./routes";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
//Connect DB
connectDB();

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
