import { DataTypes } from "sequelize";

import db from "../config/db.js";

const Like = db.define(
  "like",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
      primaryKey: true,
    },
    commentId: {
      type: DataTypes.UUID,
      references: {
        model: Comment,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "like_events",
    underscored: true,
  }
);

export default Like;
