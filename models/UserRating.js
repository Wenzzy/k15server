import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const UserRating = sequelize.define('user_rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    star: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    comment: {type: DataTypes.STRING, allowNull: true},
})