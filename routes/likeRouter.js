import { Router } from "express";
import { likePost } from "../controllers/likeController/index.js";

const likeRouter = Router();
// ADD AUTHENTICATION
likeRouter.patch("/:id/likePost", likePost);

export default likeRouter;
