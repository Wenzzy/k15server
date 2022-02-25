import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const Right = sequelize.define('right', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    system_name: {type: DataTypes.STRING, unique: true, allowNull: false},
    value: {type: DataTypes.STRING, allowNull: true}
})