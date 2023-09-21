import { Router } from "express";
import { likePost } from "../controllers/likeController/index.js";
import { deletePost } from "../controllers/likeController/methods/addLike.js";

const likeRouter = Router();
// ADD AUTHENTICATION
likeRouter.post("/:id/event", likePost).delete("/:id/event", deletePost);

export default likeRouter;
