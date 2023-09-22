import { DataTypes } from "sequelize";
import User from "./User.js";
import Group from "./Group.js";

import db from "../config/db.js";

const GroupMembership = db.define(
  "GroupMembership",
  {
    group_id: {
      type: DataTypes.UUID,
      references: {
        model: Group,
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "user_groups",
    timestamps: false,
  },
);

User.belongsToMany(Group, { through: GroupMembership, foreignKey: "user_id" });
Group.belongsToMany(User, { through: GroupMembership, foreignKey: "group_id" });

export default GroupMembership;
