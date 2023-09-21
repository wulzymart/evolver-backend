import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CreateGroup = sequelize.define("group", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default CreateGroup;
