import { Router } from "express";

const welcomeRouter = Router();

/**
 * @swagger
 * /api:
 *   get:
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

welcomeRouter.get("/", (_req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  });
});

export default welcomeRouter;
