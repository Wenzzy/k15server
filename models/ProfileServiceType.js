import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const ProfileServiceType = sequelize.define('profile_service_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})