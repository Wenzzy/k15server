import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 0},
    text: {type: DataTypes.TEXT, maxLength: 2000, allowNull: false},
    datetime: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
})