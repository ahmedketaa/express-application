import express from "express";
import cors from "cors";

import "dotenv/config";
import { dbConnection } from "./db/dbConnection.js";
import { userRoutes } from "./src/modules/users/users.routes.js";
import { noteRoutes } from "./src/modules/notes/notes.routes.js";
import { errorHandling } from "./src/middlewares/errorHandoing.js";
import { AppError } from "./src/middlewares/AppError.js";
const app = express();

app.use(cors());
app.use(express.json());

// await dbConnectio();
await dbConnection()


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