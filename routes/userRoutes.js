import express from 'express'
import { updateUser } from '../controllers/userController/index.js'
import addUserToGroup from '../controllers/groupController/methods/addUserToGroup.js';

const userRouter = express.Router()

userRouter.put('/user/:id', updateUser)
userRouter.post("/groups/:groupId/members/:userId", addUserToGroup);

export default userRouter;
