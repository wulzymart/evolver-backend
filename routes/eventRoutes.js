import express from 'express'
import {getEventById, listAllEvents } from '../controllers/eventController/index.js'

const eventRouter = express.Router()

eventRouter.get('/events', listAllEvents)
eventRouter.get('/events/:id', getEventById);


export default eventRouter;
