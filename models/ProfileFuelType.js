import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const ProfileFuelType = sequelize.define('profile_fuel_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})