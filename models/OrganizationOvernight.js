import sequelize from "../db.js"
import {DataTypes} from "sequelize";

export const OrganizationOvernight = sequelize.define('organization_overnight', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rooms_q: {type: DataTypes.INTEGER, allowNull: false},
    stars: {type: DataTypes.INTEGER, allowNull: true}
})