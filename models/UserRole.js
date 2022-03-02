import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const UserRole = sequelize.define('user_role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})