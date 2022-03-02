import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const OrganizationParking = sequelize.define('organization_parking', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    places_q: {type: DataTypes.INTEGER, allowNull: false}
})