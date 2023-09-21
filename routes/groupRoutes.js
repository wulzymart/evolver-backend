import express from 'express'
import { removeUserFromGroup } from '../controllers/groupController/index.js'

const groupRouter = express.Router()

groupRouter.delete('/groups/:groupId/members/:userId', removeUserFromGroup)

export default groupRouter;
