import Like from "../../../models/Likes .js";
import Comment from "../../../models/Event.js";
export const likePost = async (req, res) => {
  const { id } = req.params;

  /**********Authentication verificaton */
  // if (!req.userId) {
  //   return res.json({ message: "Unauthenticated" });
  // }
  //for a comment
  const commentId = await Comment.findOne({ where: { id: id } });
  const checkIfLikeExist = await Like.findOne({ where: { userId } });
  try {
    if (commentId === null) {
      console.log("Not found!");
      res.json({ messgae: "Id not found" });
    }
    if (!checkIfLikeExist) {
      const like = await Like.create({ commentId, userId });
      res.status(200).json(like);
    } else {
      console.log("UserId: ", req.userId);
      checkIfLikeExist = Like.filter((id) => id !== String(req.userId));
    }
  } catch (error) {
    res.json({ messgae: err });
  }
};
