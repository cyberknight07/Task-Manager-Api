import express, { Router } from "express";
import userRouter from "./routes/user.routes.js";
import tasksRouter from "./routes/tasks.routes.js"
import { connect } from "mongoose";
import connectToDatabase from "./Database/dbConnection.js";
import { PORT } from "./config/env.js";
const app = express();


// app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", tasksRouter);

app.get('/', (req, res) => {res.status(200).json({message: "Welcome to Task Manager"})});

app.listen(PORT, async () => {
    console.log(`App is running on http://localhost:${PORT}`);
    await connectToDatabase();
} )