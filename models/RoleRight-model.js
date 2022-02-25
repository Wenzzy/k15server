import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const RoleRight = sequelize.define('role_right', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})