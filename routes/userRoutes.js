import express from "express";
import { updateUser } from "../controllers/userController/index.js";
import {
  interestsAuthorisation,
  userCRUDAuthorisation,
} from "../middleware/authorization.js";

import { removeInterest } from "../controllers/interestController/index.js";

const userRouter = express.Router();

userRouter.put("/user/:id", userCRUDAuthorisation, updateUser);
userRouter.delete(
  "/users/:userId/interests/:eventId",
  interestsAuthorisation,
  removeInterest,
);

export default userRouter;
