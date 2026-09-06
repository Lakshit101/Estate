import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import userRouter from "./routes/user.routes.js"
import authRouter from "./routes/auth.route.js"
dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
app.use(express.json());

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


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
 
app.use((err,req,res,next)=>{
  const statusCode=err.statuscode || 500;
  const mssg = err.mssg || "Internal server error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })
})