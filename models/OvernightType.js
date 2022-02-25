import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const OvernightType = sequelize.define('overnight_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER, unique: true, allowNull: false}
})