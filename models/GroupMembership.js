import { Sequelize, DataTypes } from "sequelize";

import db from "../config/db.js";

const GroupMembership = db.define("GroupMembership", {
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default GroupMembership;
