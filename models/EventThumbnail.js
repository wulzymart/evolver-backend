import { Sequelize, DataTypes } from "sequelize";

import db from "../config/db.js";

const EventThumbnail = db.define("event_thumbnail", {
	image_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
	},
	event_id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
	},
});

User.belongsToMany(Group, { through: EventThumbnail });
Group.belongsToMany(User, { through: EventThumbnail });

export default EventThumbnail;
