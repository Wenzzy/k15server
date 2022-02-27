import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const Permission = sequelize.define('permission', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    label: {type: DataTypes.STRING, unique: false, allowNull: true},
    value: {type: DataTypes.STRING, allowNull: true}
})