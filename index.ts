"use strict";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import express from "express";
import cors from "cors";
import urlRouter from "./controller/url";
import mongoose from "mongoose";
import serverless from "serverless-http";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("connected to MongoDB database");
  })
  .catch((err) => {
    console.log("error connecting to MongoDB: ", err.message);
  });

app.use("/api/note", urlRouter);

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

module.exports.handler = serverless(app);

export { app };
