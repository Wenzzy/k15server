import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const AutoInfo = sequelize.define('auto_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    auto_name: {type: DataTypes.STRING, allowNull: false},
    auto_number: {type: DataTypes.STRING, allowNull: false}
})