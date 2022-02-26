import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const ServiceType = sequelize.define('service_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    label: {type: DataTypes.STRING, allowNull: false},
})