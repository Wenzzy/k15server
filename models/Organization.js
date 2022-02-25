import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const Organization = sequelize.define('organization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: true},
    longitude: {type: DataTypes.STRING, allowNull: true},
    latitude: {type: DataTypes.STRING, allowNull: true},
    website: {type: DataTypes.STRING, allowNull: true},
    contact_phone: {type: DataTypes.STRING, allowNull: true},
    use_user_phone: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false},
})