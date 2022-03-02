import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const OrganizationImage = sequelize.define('organization_image', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    url: {type: DataTypes.STRING, allowNull: false}
})