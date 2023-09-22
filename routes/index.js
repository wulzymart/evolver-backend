import { Router } from "express";
import welcomeRouter from "./welcomeRoute.js";
import userRouter from "./userRoutes.js";
import ImageRouter from "./ImageRoutes.js";
import eventRouter from "./eventRoutes.js";
import groupRouter from "./groupRoutes.js";
import commentRouter from "./commentRoutes.js";
import likeRouter from "./likeRouter.js";

const router = Router();

/**
 * @swagger
 * /user/:id:
 *   put:
 *     summary: Get a list of users
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */

router.use("/", welcomeRouter);

router.use(userRouter);

//describe the event routes
router.use(ImageRouter);
router.use(groupRouter);

router.use(commentRouter);

router.use(eventRouter);

router.use(likeRouter);

export default router;
