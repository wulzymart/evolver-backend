import { StatusCodes } from "http-status-codes";
import Group from "../../../models/Group.js";
import tryCatchHelper from "../../../utils/helpers/tryCatch.helpers.js";
import GroupMembership from "../../../models/GroupMembership.js";
import GroupImage from "../../../models/GroupImage.js";

const deleteGroup = tryCatchHelper(async (req, res) => {
  const { groupId } = req.params;

  if (!groupId) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid group ID" });
  }

  try {
    const group = await Group.findByPk(groupId); // Find the group

    if (!group) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Group not found" });
    }

    // Delete all group memberships for this group
    const deletedGroupMemberships = await GroupMembership.destroy({
      where: {
        group_id: group.id,
      },
    });

    if (deletedGroupMemberships) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: "Unable to delete group memberships",
      });
    }

    // Delete all group images for this group
    const deletedGroupImages = await GroupImage.destroy({
      where: {
        group_id: group.id,
      },
    });

    console.log(deletedGroupImages);

    if (deletedGroupImages) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: "Unable to delete group images",
      });
    }

    const deletedGroup = await group.destroy();

    console.log(deletedGroup);

    if (deletedGroup) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: "Unable to delete group",
      });
    }

    return res.status(StatusCodes.OK).json({
      message: `${group.title} deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Unable to delete group",
    });
  }
});

export default deleteGroup;
