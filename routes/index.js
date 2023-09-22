import { Router } from "express";
import welcomeRouter from "./welcomeRoute.js";
import userRouter from "./userRoutes.js";
import eventRouter from "./eventRoutes.js";
import groupRouter from "./groupRoutes.js";
import likeRouter from "./likeRouter.js";

const router = Router();

router.use("/", welcomeRouter);

router.use(userRouter);

router.use(groupRouter);

router.use(eventRouter);

router.use(likeRouter);

export default router;
