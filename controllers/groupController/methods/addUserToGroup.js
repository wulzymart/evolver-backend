import GroupMembership from "../../../models/GroupMembership.js";

function addUserToGroup(req, res) {
  const { userId, groupId } = req.params;

  try {
    GroupMembership.create({
      user_id: userId,
      group_id: groupId,
    });

    res
      .status(200)
      .json({ message: "user has been successfully added to group." });
  } catch (err) {
    console.error("Error creating user: ", err);
    res.status(500).json({ message: "Internal server error." });
  }
}

export default addUserToGroup;
