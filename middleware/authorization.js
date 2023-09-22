/**
 * Event app authorisation middleware
 * this is tentative with assumption that session object in request will contain user id generated at authentication and supplied by the frontend
 *
 */
import Event from "../models/Event.js";
import Group from "../models/Groups.js";

// authorises entry into the app to ensure user is logged in
export const userAuthorisation = (req, res, next) => {
  // if user is not loggen in,
  if (!req.user)
    return res
      .status(401)
      .json({ status: "failed", msg: "You are not logged in" });
  // all other endpoints are accessible
  return next();
};

// Events endpoint authorisation needed of PUT and DELETE
export const eventCRUDAuthorise = async (req, res, next) => {
  const userId = req.user.id;
  const { eventId } = req.params;
  const event = Event.findByPk(eventId);

  if (!event)
    // if event is not found
    return res
      .status(400)
      .json({ status: "failed", msg: "Event doesnt exist" });
  // for PUT and DELETE check if user is creator
  if (req.method === "PUT" || req.method === "DELETE") {
    if (event.creator !== userId)
      return res.status(401).json({
        status: "failed",
        msg: "You are not the creator of this event",
      });
  }
  return next();
};

// Groups endpoint authorisation for updating and deleting groups
export const groupCrudAuthorisation = (req, res, next) => {
  const userId = req.user.id;
  const { groupId } = req.params;
  const group = Group.findByPk(groupId);

  if (!group)
    // check if a group exists
    return res
      .status(400)
      .json({ status: "failed", msg: "Group doesnt exist" });

  // for PUT and DELETE check if user is admin
  if (req.method === "PUT" || req.method === "DELETE") {
    if (group.creator_id !== userId)
      return res.status(401).json({
        status: "failed",
        msg: "You are not the creator of this group",
      });
  }

  return next();
};

// Authorisation for deletion of group members (DELETE only) the if statement for request is to guard for delete
export const groupMembershipCrudAuthorisation = (req, res, next) => {
  const userId = req.user.id;
  const { groupId } = req.params;
  const group = Group.findByPk(groupId);
  if (!group)
    // group doesnt exist
    return res
      .status(400)
      .json({ status: "failed", msg: "Group doesnt exist" });

  //   for DELETE only
  if (req.method === "DELETE") {
    if (group.creator_id !== userId || userId != req.params.userId)
      return res.status(401).json({
        status: "failed",
        msg: "You are not authorised to delete a user",
      });
  }

  return next();
};

// Interests: user can only remove his own interest
export const interestsAuthorisation = (req, res, next) => {
  const userId = req.user.id;
  const { userId: usertoDelete } = req.params;

  if (userId !== usertoDelete)
    return res.status(401).json({
      status: "failed",
      msg: "You are not authorised to delete or add interests for others",
    });
  return next();
};

//likes: user can only unlike whe he/she liked
export const likesAuthorisation = (req, res, next) => {
  const userId = req.user.id;
  const { userId: usertoDelete } = req.params;
  if (userId !== usertoDelete)
    return res.status(401).json({
      status: "failed",
      msg: "You are not authorised to add/remove another user's likes",
    });
  return next();
};
