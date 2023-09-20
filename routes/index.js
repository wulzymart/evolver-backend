import { Router } from "express";
import welcomeRouter from "./welcomeRoute.js";

const router = Router();

// describe the route for the root path
router.use("/", welcomeRouter);

export default router;
