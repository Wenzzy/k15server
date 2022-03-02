import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const FuelType = sequelize.define('fuel_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    label: {type: DataTypes.STRING, unique: false, allowNull: false},
})