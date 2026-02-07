/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./dataBase/db";
import routes from "./routes";
import logger from "./utils/logger";
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(
  morgan("combined", {
    stream: {
      write: (message: string) => logger.info(message.trim()),
    },
  })
);

//Connect DB
connectDB();

app.use("/api", routes);

//MiddleWare for handling errors
app.use((err: any, req: Request, res: Response) => {
  logger.error(err.stack || err.message || "Unknown error");
  res
    .status(500)
    .json({ message: "Internal Server Error", error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
