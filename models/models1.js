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

const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    token: {type: DataTypes.TEXT, allowNull: false}
})


const Profile = sequelize.define('profile', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING, unique: true, allowNull: false},
    about: {type: DataTypes.STRING, allowNull: true},
    distance: {type: DataTypes.INTEGER, allowNull: true},
    weight: {type: DataTypes.INTEGER, allowNull: true},
    volume: {type: DataTypes.INTEGER, allowNull: true}
})

const AutoInfo = sequelize.define('auto_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    auto_name: {type: DataTypes.STRING, allowNull: false},
    auto_number: {type: DataTypes.STRING, allowNull: false}
})

const ServiceType = sequelize.define('service_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const FuelType = sequelize.define('fuel_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ProfileType = sequelize.define('profile_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ProfileProfileType = sequelize.define('profile_profile_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
const ProfileFuelType = sequelize.define('profile_fuel_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ProfileImage = sequelize.define('profile_image', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    url: {type: DataTypes.STRING, allowNull: false}
})

const Organization = sequelize.define('organization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: true},
    longitude: {type: DataTypes.STRING, allowNull: true},
    latitude: {type: DataTypes.STRING, allowNull: true},
    website: {type: DataTypes.STRING, allowNull: true},
    contact_phone: {type: DataTypes.STRING, allowNull: true},
    use_user_phone: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false},
})

const OrganizationImage = sequelize.define('organization_image', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    url: {type: DataTypes.STRING, allowNull: false}
})


const OrganizationType = sequelize.define('organization_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const OrganizationCaffe = sequelize.define('organization_caffe', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    places_q: {type: DataTypes.INTEGER, allowNull: false}
})

const OrganizationOvernight = sequelize.define('organization_overnight', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rooms_q: {type: DataTypes.INTEGER, allowNull: false},
    stars: {type: DataTypes.INTEGER, allowNull: true}
})

const OrganizationParking = sequelize.define('organization_parking', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    places_q: {type: DataTypes.INTEGER, allowNull: false}
})

const OvernightType = sequelize.define('overnight_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.INTEGER, unique: true, allowNull: false}
})

const WorkTime = sequelize.define('work_time', {
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

const Ticket = sequelize.define('ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address: {type: DataTypes.STRING, allowNull: true},
    longitude: {type: DataTypes.STRING, allowNull: true},
    latitude: {type: DataTypes.STRING, allowNull: true},
    status: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    phone: {type: DataTypes.STRING, allowNull: true},
    use_user_phone: {type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false}
})

const TicketView = sequelize.define('ticket_view', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const TicketImage = sequelize.define('ticket_image', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    url: {type: DataTypes.STRING, allowNull: false}
})


const HelpTicket = sequelize.define('help_ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    message: {type: DataTypes.STRING, allowNull: true},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 0},
})

const HelpTicketImage = sequelize.define('help_ticket_image', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    url: {type: DataTypes.STRING, allowNull: false}
})


const Dialog = sequelize.define('dialog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 0},
    datetime: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
})

const UserDialog = sequelize.define('user_dialog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 0},
    text: {type: DataTypes.TEXT, maxLength: 2000, allowNull: false},
    datetime: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false, defaultValue: 0},
    datetime: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
})

const HelpMessage = sequelize.define('help_message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.TEXT, maxLength: 2000, allowNull: false},
    datetime: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
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

User.hasOne(Profile)
Profile.belongsTo(User)

User.hasOne(UserRating, { as: 'HomeUser', foreignKey: 'homeUserId' });
User.hasOne(UserRating, { as: 'AwayUser', foreignKey: 'awayUserId' });
UserRating.belongsTo(User);

// User.hasMany(Ticket, {
//     foreignKey: "user_id"
// })
// Ticket.belongsTo(User)
//
// User.hasMany(Order, {
//     foreignKey: "user_id"
// })
// Order.belongsTo(User)




export default {
    User,
    UserRating,
    Token,
    Profile,
    ProfileImage,
    ProfileType,
    FuelType,
    AutoInfo,
    Dialog,
    Ticket,
    Order,
    HelpMessage,
    HelpTicket,
    HelpTicketImage,
    Message,
    TicketImage,
    Role,
    Organization,
    OrganizationCaffe,
    OrganizationImage,
    OrganizationOvernight,
    OrganizationParking,
    OrganizationType,
    OvernightType,
    Right,
    ServiceType,
    TicketView,
    WorkTime
}

