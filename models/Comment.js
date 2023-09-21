import { Sequelize, DataTypes } from "sequelize";
import db from "../config/db.js";
import Event from "./Event.js";
import User from "./User.js";

const Comment = db.define("comment", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true
    },
    body: {
        type: DataTypes.TEXT,
        defaultValue: "",
        allowNull: false
    }
},{
    timestamps: false
})

Comment.belongsTo(Event, { foreignKey: 'event_id' })
Comment.belongsTo(User, { foreignKey: 'user_id' })

Event.hasMany(Comment, { foreignKey: 'event_id' });
User.hasMany(Comment, { foreignKey: 'user_id' });

export default Comment