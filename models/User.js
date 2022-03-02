import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING, unique: true, allowNull: false}
})