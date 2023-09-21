import { DataTypes } from "sequelize";

import db from "../config/db.js";

const Like = db.define("like", {
  CommentId: {
    type: DataTypes.UUID,
    references: {
      model: Comment,
      key: "id",
    },
  },
  UserId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: "id",
    },
  },
});
export default Like;
