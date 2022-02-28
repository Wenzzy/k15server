import {AutoInfo} from "./AutoInfo.js";
import {Dialog} from "./Dialog.js";
import {FuelType} from "./FuelType.js";
import {HelpMessage} from "./HelpMessage.js";
import {HelpTicket} from "./HelpTicket.js";
import {HelpTicketImage} from "./HelpTicketImage.js";
import {Message} from "./Message.js";
import {Order} from "./Order.js";
import {Organization} from "./Organization.js";
import {OrganizationCaffe} from "./OrganizationCaffe.js";
import {OrganizationImage} from "./OrganizationImage.js";
import {OrganizationOvernight} from "./OrganizationOvernight.js";
import {OrganizationParking} from "./OrganizationParking.js";
import {OrganizationType} from "./OrganizationType.js";
import {OvernightType} from "./OvernightType.js";
import {Profile} from "./Profile.js";
import {ProfileFuelType} from "./ProfileFuelType.js";
import {ProfileImage} from "./ProfileImage.js";
import {ProfileServiceType} from "./ProfileServiceType.js";
import {ProfileType} from "./ProfileType.js";
import {Permission} from "./Permission.js";
import {Role} from "./Role.js";
import {RolePermission} from "./RolePermission.js";
import {ServiceType} from "./ServiceType.js";
import {Ticket} from "./Ticket.js";
import {TicketImage} from "./TicketImage.js";
import {TicketServiceType} from "./TicketServiceType.js";
import {TicketView} from "./TicketView.js";
import {Token} from "./Token.js";
import {User} from "./User.js";
import {UserRating} from "./UserRating.js";
import {UserDialog} from "./UserDialog.js";
import {WorkTime} from "./WorkTime.js";
import {Otp} from "./Otp.js";
import {UserRole} from "./UserRole.js";

// Rating for user
UserRating.belongsTo(User, { as:'user_from', foreignKey: 'user_from_id'});
UserRating.belongsTo(User, { as:'user_for', foreignKey: 'user_for_id'});


// Roles and rights for user
User.belongsToMany(Role, { as: 'Roles', through: UserRole, onDelete: "CASCADE" })
Role.belongsToMany(User, { through: UserRole })

Role.belongsToMany(Permission, { as: 'Permissions', through: RolePermission, onDelete: "CASCADE" })
Permission.belongsToMany(Role, { through: RolePermission })

// Token for user
User.hasOne(Token, {
    onDelete: "CASCADE"
})
Token.belongsTo(User)

User.hasOne(Otp, {
    onDelete: "CASCADE"
})
Otp.belongsTo(User)

// dialogs and messages for user
User.belongsToMany(Dialog, { as: 'Dialogs', through: UserDialog, onDelete: "CASCADE"})
Dialog.belongsToMany(User, { through: UserDialog })

User.hasMany(Message, {
    onDelete: "CASCADE"
})
Message.belongsTo(User)

Dialog.hasMany(Message, {
    onDelete: "CASCADE"
})
Message.belongsTo(Dialog)

// additional messages on dialog
Dialog.hasMany(Order, {
    onDelete: "CASCADE"
})
Order.belongsTo(Dialog)

Dialog.hasMany(HelpMessage, {
    onDelete: "CASCADE"
})
HelpMessage.belongsTo(Dialog)


// Dialog and ticket
Ticket.hasOne(Dialog)
Dialog.belongsTo(Ticket)

//Order
User.hasMany(Order, {
    onDelete: "CASCADE"
})
Order.belongsTo(User)

Ticket.hasMany(Order)
Order.belongsTo(Ticket)


//Ticket
User.hasMany(Ticket, {
    onDelete: "CASCADE"
})
Ticket.belongsTo(User)

Ticket.hasMany(TicketImage, {
    onDelete: "CASCADE"
})
TicketImage.belongsTo(Ticket)

Ticket.hasMany(TicketView, {
    onDelete: "CASCADE"
})
TicketView.belongsTo(Ticket)

Ticket.belongsToMany(ServiceType, { as: 'ServiceTypes', through: TicketServiceType, onDelete: "CASCADE" })
ServiceType.belongsToMany(Ticket, { through: TicketServiceType })

User.hasOne(TicketView, {
    onDelete: "CASCADE"
})
TicketView.belongsTo(User)


// Help ticket
User.hasMany(HelpTicket, {
    onDelete: "CASCADE"
})
HelpTicket.belongsTo(User)

HelpTicket.hasMany(HelpTicketImage, {
    onDelete: "CASCADE"
})
HelpTicketImage.belongsTo(HelpTicket)


//Profile

User.hasOne(Profile, {
    onDelete: "CASCADE"
})
Profile.belongsTo(User)

Profile.belongsToMany(ServiceType, { as: 'ServiceTypes', through: ProfileServiceType, onDelete: "CASCADE" })
ServiceType.belongsToMany(Profile, { through: ProfileServiceType })

Profile.belongsToMany(FuelType, { as: 'FuelTypes', through: ProfileFuelType, onDelete: "CASCADE" })
FuelType.belongsToMany(Profile, { through: ProfileFuelType })

ProfileType.hasMany(Profile)
Profile.belongsTo(ProfileType, { as: 'ProfileType' })

Profile.hasOne(AutoInfo, {
    onDelete: "CASCADE"
})
AutoInfo.belongsTo(Profile)

Profile.hasMany(ProfileImage, {
    onDelete: "CASCADE"
})
ProfileImage.belongsTo(Profile)

// Organization

Profile.hasMany(Organization, {
    onDelete: "CASCADE"
})
Organization.belongsTo(Profile)

Organization.hasMany(OrganizationImage, {
    onDelete: "CASCADE"
})
OrganizationImage.belongsTo(Organization)

Organization.hasOne(WorkTime, {
    onDelete: "CASCADE"
})
WorkTime.belongsTo(Organization)

OrganizationType.hasMany(Organization)
Organization.belongsTo(OrganizationType)

Organization.hasOne(OrganizationCaffe, {
    onDelete: "CASCADE"
})
OrganizationCaffe.belongsTo(Organization)

Organization.hasOne(OrganizationOvernight, {
    onDelete: "CASCADE"
})
OrganizationOvernight.belongsTo(Organization)

Organization.hasOne(OrganizationParking, {
    onDelete: "CASCADE"
})
OrganizationParking.belongsTo(Organization)

OvernightType.hasMany(OrganizationOvernight)
OrganizationOvernight.belongsTo(OvernightType)

export {
    User,
    UserRating,
    UserDialog,
    UserRole,
    ProfileFuelType,
    ProfileServiceType,
    TicketServiceType,
    Token,
    Otp,
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
    RolePermission,
    Organization,
    OrganizationCaffe,
    OrganizationImage,
    OrganizationOvernight,
    OrganizationParking,
    OrganizationType,
    OvernightType,
    Permission,
    ServiceType,
    TicketView,
    WorkTime
}