import mongoose from "mongoose"

  export const dbConnection =  mongoose.connect("mongodb://localhost:27017/ITIG3").then(()=>console.log("db connected")
    ).catch((err)=> console.log("db error", err))