import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const TicketServiceType = sequelize.define('ticket_service_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})