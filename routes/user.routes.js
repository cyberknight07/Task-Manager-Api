import { Router } from "express";
import { signup } from "../controllers/users.controller.js"
import { signin } from "../controllers/users.controller.js"
import { getUserById } from "../controllers/users.controller.js"
import { updateUserDetails } from "../controllers/users.controller.js"
import { deleteUserById } from "../controllers/users.controller.js"

const userRouter = Router();

// User
userRouter.get("/users/:id", getUserById);

userRouter.post("/users/signup", signup);

userRouter.post("/users/signin", signin);

userRouter.put("/users/:id", updateUserDetails);

userRouter.delete("/users/:id", deleteUserById);

export default userRouter;