import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 0},
    datetime: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
})