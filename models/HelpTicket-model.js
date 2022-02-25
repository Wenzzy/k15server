import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const HelpTicket = sequelize.define('help_ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    message: {type: DataTypes.STRING, allowNull: true},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 0},
})