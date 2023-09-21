import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Group = db.define('group', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT
  }
})

export default Group;
