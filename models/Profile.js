import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const Profile = sequelize.define('profile', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING, unique: false, allowNull: false},
    about: {type: DataTypes.STRING, allowNull: true},
    distance: {type: DataTypes.INTEGER, allowNull: true},
    weight: {type: DataTypes.INTEGER, allowNull: true},
    volume: {type: DataTypes.INTEGER, allowNull: true}
})