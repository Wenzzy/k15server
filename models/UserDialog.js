import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const UserDialog = sequelize.define('user_dialog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})