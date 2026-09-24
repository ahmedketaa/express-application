import mongoose from "mongoose";
import "dotenv/config";
export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Database connected");
    } catch (error) {
        console.log("Database connection error:", error);
        throw error;
    }
};