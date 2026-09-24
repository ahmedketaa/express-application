import express from "express";
import cors from "cors";

import { dbConnection } from "../db/dbConnection.js";
import { userRoutes } from "../src/modules/users/users.routes.js";
import { noteRoutes } from "../src/modules/notes/notes.routes.js";
import { AppError } from "../src/middlewares/AppError.js";
import { errorHandling } from "../src/middlewares/errorHandling.js";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(express.json());

await dbConnection();

app.use(userRoutes);
app.use(noteRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "API is working!"
    });
});

app.use((req, res, next) => {
    next(new AppError("URL not found", 404));
});

app.use(errorHandling);

export default app;