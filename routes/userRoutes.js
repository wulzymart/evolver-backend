import express from "express";
import { updateUser } from "../controllers/userController/index.js";
import { userCRUDAuthorisation } from "../middleware/authorization.js";

const userRouter = express.Router();

userRouter.put("/user/:id", userCRUDAuthorisation, updateUser);

export default userRouter;
