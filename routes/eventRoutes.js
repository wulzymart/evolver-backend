import express from "express";
import {
  getEventDetails,
  listAllEvents,
} from "../controllers/eventController/index.js";

import {
  AddCommentToEvent
} from "../controllers/commentController/index.js"


const eventRouter = express.Router();

eventRouter.get("/events", listAllEvents);
eventRouter.get("/events/:id", getEventDetails);

eventRouter.post("/events/:eventId", AddCommentToEvent);

export default eventRouter;
