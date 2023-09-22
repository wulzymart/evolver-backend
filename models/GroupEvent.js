import {Sequelize, DataType} from 'sequelize'

import db from '../config/db.js'
import Group from './Group.js'
import Event from './Event.js'

const GroupEvent = db.define('group_event', {
    id: {
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    },
    group_id: {
        type: DataType.UUID,
        references: {
            model: Group,
            key: 'id'
        }
    },
    event_id: {
        type: DataType.UUID,
        references: {
            model: Event,
            key: 'id'
        }
    }
}) 

Group.belongsToMany(Event, {through: GroupEvent})
Event.belongsToMany(Group, {through: GroupEvent})
