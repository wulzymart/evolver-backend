import express from "express";
import {
  addUserToGroup,
  removeUserFromGroup,
} from "../controllers/groupController/index.js";

const groupRouter = express.Router();

groupRouter.post("/groups/:groupId/members/:userId", addUserToGroup);
groupRouter.delete("/groups/:groupId/members/:userId", removeUserFromGroup);

export default groupRouter;
