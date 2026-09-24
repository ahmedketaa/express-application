import mongoose from "mongoose"
import "dotenv/config";

  export const dbConnection =  mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("db connected")
    ).catch((err)=> console.log("db error", err))