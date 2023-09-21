import db from '../config/db.js';
import { DataTypes } from 'sequelize'

const groups = db.define("groups",{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      title:{
        type: DataTypes.TEXT,
        allowNull: false,
      }
})

export default groups;