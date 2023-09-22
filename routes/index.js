import { Router } from "express";
import welcomeRouter from "./welcomeRoute.js";
import userRouter from "./userRoutes.js";
import ImageRouter from "./ImageRoutes.js";

const router = Router();

// describe the route for the root path
router.use("/", welcomeRouter);

// describe the user routes
router.use(userRouter);

//describe the event routes
router.use(ImageRouter);

export default router;
