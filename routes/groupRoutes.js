import express from "express";
import {
  addUserToGroup,
  removeUserFromGroup,
  createGroup,
} from "../controllers/groupController/index.js";
import { groupMembershipCrudAuthorisation } from "../middleware/authorization.js";

const groupRouter = express.Router();

groupRouter.post("/groups", createGroup);
groupRouter.put("/groups/:groupId");
groupRouter.post(
  "/groups/:groupId/members/:userId",
  groupMembershipCrudAuthorisation,
  addUserToGroup,
);
groupRouter.delete(
  "/groups/:groupId/members/:userId",
  groupMembershipCrudAuthorisation,
  removeUserFromGroup,
);

export default groupRouter;
