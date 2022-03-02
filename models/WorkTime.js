import sequelize from '../db.js'
import {DataTypes} from 'sequelize';

export const WorkTime = sequelize.define('work_time', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    around: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    mon_from: {type: DataTypes.TIME, allowNull: false, defaultValue: '10:00:00'},
    mon_to: {type: DataTypes.TIME, allowNull: false, defaultValue: '20:00:00'},
    mon_around: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    tue_from: {type: DataTypes.TIME, allowNull: false, defaultValue: '10:00:00'},
    tue_to: {type: DataTypes.TIME, allowNull: false, defaultValue: '20:00:00'},
    tue_around: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    wed_from: {type: DataTypes.TIME, allowNull: false, defaultValue: '10:00:00'},
    wed_to: {type: DataTypes.TIME, allowNull: false, defaultValue: '20:00:00'},
    wed_around: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    thu_from: {type: DataTypes.TIME, allowNull: false, defaultValue: '10:00:00'},
    thu_to: {type: DataTypes.TIME, allowNull: false, defaultValue: '20:00:00'},
    thu_around: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    fri_from: {type: DataTypes.TIME, allowNull: false, defaultValue: '10:00:00'},
    fri_to: {type: DataTypes.TIME, allowNull: false, defaultValue: '20:00:00'},
    fri_around: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    sat_from: {type: DataTypes.TIME, allowNull: false, defaultValue: '10:00:00'},
    sat_to: {type: DataTypes.TIME, allowNull: false, defaultValue: '20:00:00'},
    sat_around: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    sun_from: {type: DataTypes.TIME, allowNull: false, defaultValue: '10:00:00'},
    sun_to: {type: DataTypes.TIME, allowNull: false, defaultValue: '20:00:00'},
    sun_around: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
})