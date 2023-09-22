import express from "express";
import {
  addUserToGroup,
  removeUserFromGroup,
  createGroup,
} from "../controllers/groupController/index.js";
import {
  groupCrudAuthorisation,
  groupMembershipCrudAuthorisation,
} from "../middleware/authorization.js";
import {
  getGroupDetails,
  deleteGroup,
} from "../controllers/groupController/index.js";

const groupRouter = express.Router();

groupRouter.get("/groups/:groupId", getGroupDetails);
groupRouter.post("/groups", createGroup);
groupRouter.put("/groups/:groupId");
groupRouter.delete("/groups/:groupId", groupCrudAuthorisation, deleteGroup);

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
