import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./router/router.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.use("/posts", router);

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("connected to server"))
    .catch((error) => console.log(error));
});
