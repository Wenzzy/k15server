import sequelize from "../db.js"
import {DataTypes} from "sequelize";

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING, unique: true, allowNull: false},
    is_activated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activate_code: {type: DataTypes.STRING}
})

const UserRating = sequelize.define('user_rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    star: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    comment: {type: DataTypes.STRING, allowNull: true},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})
const Right = sequelize.define('right', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    system_name: {type: DataTypes.STRING, unique: true, allowNull: false},
    value: {type: DataTypes.STRING, allowNull: true}
})
const RoleRight = sequelize.define('role_right', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

// User.hasOne(UserRating, { as: 'HomeUser', foreignKey: 'homeUserId' });
// User.hasOne(UserRating, { as: 'AwayUser', foreignKey: 'awayUserId' });
UserRating.belongsTo(User, { as:'firstGuy', foreignKey: 'first_guy_id'});
UserRating.belongsTo(User, { as:'secondGuy', foreignKey: 'second_guy_id'});

User.hasMany(Role)
Role.belongsTo(User)
// Role.belongsToMany(User, {
//     foreignKey: "user_id"
// })




export default {
    User,
    UserRating,
}

