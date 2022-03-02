import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const TicketView = sequelize.define('ticket_view', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})