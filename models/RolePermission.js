import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const RolePermission = sequelize.define('role_permission', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})