import express from "express";
import {
  getEventDetails,
  listAllEvents,
} from "../controllers/eventController/index.js";

const eventRouter = express.Router();

eventRouter.get("/events", listAllEvents);
eventRouter.get("/events/:id", getEventDetails);

export default eventRouter;
