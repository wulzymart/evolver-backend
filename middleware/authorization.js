/**
 * Event app authorisation middleware
 * this is tentative with assumption that session object in request will contain user id generated at authentication and supplied by the frontend
 *
 */
import Event from '../models/event.js';
import Group from '../models/group.js';

// authorises entry into the app to ensure user is logged in
const userAuthorisation = (req, res, next) => {
  // if user is not loggen in,
  if (!req.session?.userId)
    return res
      .status(401)
      .json({ status: 'failed', msg: 'You are not logged in' });
  // all other endpoints are accessible
  return next();
};

// Events endpoint authorisation needed of PUT and DELETE
const eventCRUDAuthorise = async (req, res, next) => {
  const userId = req.session.userId;
  const { eventId } = req.params;
  const event = Event.findByPK(eventId);

  if (!event)
    // if event is not found
    return res
      .status(400)
      .json({ status: 'failed', msg: 'Event doesnt exist' });
  // for PUT and DELETE check if user is creator
  if (req.method === 'PUT' || req.method === 'DELETE') {
    if (event.creator !== userId)
      return res.status(401).json({
        status: 'failed',
        msg: 'You are not the creator of this event',
      });
  }
  return next();
};

// Groups endpoint authorisation for updating and deleting groups
const groupCrudAuthorisation = (req, res, next) => {
  const userId = req.session.userId;
  const { groupId } = req.params;
  const group = Group.findByPK(groupId);

  if (!group)
    // check if a group exists
    return res
      .status(400)
      .json({ status: 'failed', msg: 'Group doesnt exist' });

  // for PUT and DELETE check if user is admin
  if (req.method === 'PUT' || req.method === 'DELETE') {
    if (group.admin !== userId)
      return res.status(401).json({
        status: 'failed',
        msg: 'You are not the creator of this group',
      });
  }

  return next();
};

// Authorisation for deletion of group members (DELETE only) the if statement for request is to guard for delete
const groupMembershipCrudAuthorisation = (req, res, next) => {
  const userId = req.session.userId;
  const { groupId } = req.params;
  const group = Group.findByPK(groupId);
  if (!group)
    // group doesnt exist
    return res
      .status(400)
      .json({ status: 'failed', msg: 'Group doesnt exist' });

  //   for DELETE only
  if (req.method === 'DELETE') {
    if (group.admin !== userId || userId != req.params.userId)
      return res.status(401).json({
        status: 'failed',
        msg: 'You are not authorised to delete a user',
      });
  }

  return next();
};

// Interests: user can only remove his own interest
const interestRemoveAuthorisation = (req, res, next) => {
  const userId = req.session.userId;
  const { userId: usertoDelete } = req.params;
  if (req.method === 'DELETE') {
    if (userId !== usertoDelete)
      return res.status(401).json({
        status: 'failed',
        msg: 'You are not authorised to delete another users interest',
      });
  }
  return next();
};
