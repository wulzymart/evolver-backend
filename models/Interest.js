import {  DataTypes } from "sequelize";

import db from "../config/db.js";

const Interest = db.define("Interest", {
 event_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
});
 Interest.belongsTo(interested_events, {
   foreignKey: "event_id",
 });

export default Interest;
