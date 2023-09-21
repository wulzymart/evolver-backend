import { Router } from "express";
import { updateUser } from "../controllers/userController/index.js";

const likeRouter = Router();

likeRouter.put("/user/:id", updateUser);

export default likeRouter;
