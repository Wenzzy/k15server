import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const OrganizationCaffe = sequelize.define('organization_caffe', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    places_q: {type: DataTypes.INTEGER, allowNull: false}
})