import express from "express";
import {
  addUserToGroup,
  removeUserFromGroup,
  createGroup,
} from "../controllers/groupController/index.js";
import { groupMembershipCrudAuthorisation } from "../middleware/authorization.js";
  getGroupDetails,
  deleteGroup,
} from "../controllers/groupController/index.js";

const groupRouter = express.Router();

groupRouter.post("/groups", createGroup);
groupRouter.put("/groups/:groupId");
<<<<<<< HEAD
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
=======
groupRouter.delete("/groups/:groupId", deleteGroup);
groupRouter.post("/groups/:groupId/members/:userId", addUserToGroup);
groupRouter.delete("/groups/:groupId/members/:userId", removeUserFromGroup);
groupRouter.get("/groups/:groupId", getGroupDetails);
>>>>>>> dev

export default groupRouter;
