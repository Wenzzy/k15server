import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    token: {type: DataTypes.TEXT, allowNull: false}
})