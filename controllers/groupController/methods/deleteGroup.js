import { StatusCodes } from "http-status-codes";
import tryCatchHelper from "../../../utils/helpers/tryCatch.helpers.js";
import { errorResponse, successResponse } from "../../../utils/helpers/response.helpers.js";
import Group from "../../../models/Group.js";

/**
 * @description Delete a Group
 * @route DELETE /api/groups/:groupId
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {object} Response message
 */

const deleteGroup = tryCatchHelper(async (req, res) => {
  const { groupId } = req.params;

  if (!groupId) {
    return errorResponse(res, "Invalid group ID", StatusCodes.BAD_REQUEST);
  }

  const group = await Group.findByPk(groupId);

  if (!group) {
    return errorResponse(res, "Group not found", StatusCodes.NOT_FOUND);
  }

  await group.destroy();

  successResponse(res, `${group.title} deleted successfully`, null, StatusCodes.NO_CONTENT);
});

export default deleteGroup;