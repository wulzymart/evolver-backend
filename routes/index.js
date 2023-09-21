import { Router } from "express";
import welcomeRouter from "./welcomeRoute.js";
import userRouter from "./userRoutes.js";
import groupRouter from "./groupRoutes.js";
import commentRouter from "./commentRoutes.js";

const router = Router();

// describe the route for the root path
router.use("/", welcomeRouter);

// describe the user routes
router.use(userRouter);

//describe the group routes
router.use(groupRouter)

//describe the comments route
router.use(commentRouter)

export default router;
