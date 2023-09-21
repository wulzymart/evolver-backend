import Like from "../../../models/Likes .js";
import Event from "../../../models/Event.js";
export const likePost = async (req, res) => {
  const { id } = req.params;
  /**********Authentication verificaton */
  // if (!req.userId) {
  //   return res.json({ message: "Unauthenticated" });
  // }
  //for a comment
  // const eventId = await Event.findOne({ where: { id } });
  const checkIfLikeExist = await Like.findOne({ where: { userId } });
  try {
    if (eventId === null) {
      console.log("Not found!");
      res.json({ messgae: "Id not found" });
    }
    // if (index === -1) {
    if (!checkIfLikeExist) {
      const like = await Like.create();
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.json({ messgae: err });
  }
};
export const deletePost = async (req, res) => {
  const { EventId } = req.params;
  /**********Authentication verificaton */
  // if (!req.userId) {
  //   return res.json({ message: "Unauthenticated" });
  // }

  const eventId = await Like.findOne({ where: { EventId } });
  try {
    if (eventId === null) {
      console.log("Not found!");
    }
    res.json({ error: "Id not found" });
    // const index = Like.findIndex((id) => id === String(req.userId));
    // console.log("index: ", index);

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.json({ messgae: err });
  }
};
