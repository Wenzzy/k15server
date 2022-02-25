import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const OrganizationType = sequelize.define('organization_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})