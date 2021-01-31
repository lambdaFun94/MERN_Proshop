import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();
connectDB();

app.use("/api/products", productRoutes);

app.get("/", (req, res, next) => {
  res.send("Api is running");
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on ${PORT} in ${process.env.NODE_ENV}`);
});
