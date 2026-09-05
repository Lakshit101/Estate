import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

mongoose.connect(process.env.Mongo)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Error " + err);
  });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

