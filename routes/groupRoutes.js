import express from "express";
import {
  addUserToGroup,
  removeUserFromGroup,
  createGroup,
  getGroupDetails,
  deleteGroup,
  updateGroup
} from "../controllers/groupController/index.js";

const groupRouter = express.Router();

groupRouter.post("/groups", createGroup);
groupRouter.put("/groups/:groupId", updateGroup);
groupRouter.delete("/groups/:groupId", deleteGroup);
groupRouter.post("/groups/:groupId/members/:userId", addUserToGroup);
groupRouter.delete("/groups/:groupId/members/:userId", removeUserFromGroup);
groupRouter.get("/groups/:groupId", getGroupDetails);

export default groupRouter;
