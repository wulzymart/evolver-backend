import { DataTypes } from "sequelize";
import db from "../config/db.js";

const CommentImages = db.define("comment_images", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  commentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "comment",
      key: "id",
    },
  },
  imageId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "image",
      key: "id",
    },
  },
});

export default CommentImages;
