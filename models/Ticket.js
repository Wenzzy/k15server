import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const Ticket = sequelize.define('ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address: {type: DataTypes.STRING, allowNull: true},
    longitude: {type: DataTypes.STRING, allowNull: true},
    latitude: {type: DataTypes.STRING, allowNull: true},
    status: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    phone: {type: DataTypes.STRING, allowNull: true},
    use_user_phone: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false}
})