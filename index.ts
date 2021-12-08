"use strict";
import express from "express";
import cors from "cors";
import noteRouter from "./routes/url";
import mongoose from "mongoose";
// import serverless from 'serverless-http';

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongoose")
  .then(() => {
    console.log("connected to MongoDB database");
  })
  .catch((err) => {
    console.log("error connecting to MongoDB: ", err.message);
  });

const PORT = 3001;

app.use("/api/note", noteRouter);

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// module.exports = app;
// module.exports.handler = serverless(app);
