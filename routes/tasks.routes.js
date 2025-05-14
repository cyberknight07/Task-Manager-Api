import { Router } from "express";

const tasksRouter = Router();

tasksRouter.get("/tasks", (req, res) => {res.json({
    message: "Get all tasks"
})})
tasksRouter.get("/tasks/:id", (req, res) => {"Get specific task"});
tasksRouter.post("/tasks", (req, res) => {"Create Task"});
tasksRouter.put("/tasks/:id", (req, res) => {"Update specific task"});
tasksRouter.delete("/tasks/:id", (req, res) => {"Delete specific task"});




export default tasksRouter;