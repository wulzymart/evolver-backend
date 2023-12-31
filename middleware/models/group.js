const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = require("./user");

const Group = sequelize.define('Group', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    groupUuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        field:"group_uuid",
    },
    groupName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            len: [1, 255],
        },
        field:"group_name",
    },
    groupProfilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
        field:"profile_picture",
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    creator: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notNull: true,
        },
    },
    members: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
});

Group.belongsTo(User, {
    foreignKey: 'creator',
    targetKey: 'email',
});

module.exports = { Group };
