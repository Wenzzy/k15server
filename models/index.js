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
User.belongsToMany(Role, { through: UserRole })
Role.belongsToMany(User, { through: UserRole })

Role.belongsToMany(Permission, { through: RolePermission })
Permission.belongsToMany(Role, { through: RolePermission })

// Token for user
User.hasOne(Token)
Token.belongsTo(User)

User.hasOne(Otp)
Otp.belongsTo(User)

// dialogs and messages for user
User.belongsToMany(Dialog, { through: UserDialog })
Dialog.belongsToMany(User, { through: UserDialog })

User.hasMany(Message)
Message.belongsTo(User)

Dialog.hasMany(Message)
Message.belongsTo(Dialog)

// additional messages on dialog
Dialog.hasMany(Order)
Order.belongsTo(Dialog)

Dialog.hasMany(HelpMessage)
HelpMessage.belongsTo(Dialog)


// Dialog and ticket
Ticket.hasOne(Dialog)
Dialog.belongsTo(Ticket)

//Order
User.hasMany(Order)
Order.belongsTo(User)

Ticket.hasMany(Order)
Order.belongsTo(Ticket)


//Ticket
User.hasMany(Ticket)
Ticket.belongsTo(User)

Ticket.hasMany(TicketImage)
TicketImage.belongsTo(Ticket)

Ticket.hasMany(TicketView)
TicketView.belongsTo(Ticket)

Ticket.belongsToMany(ServiceType, { through: TicketServiceType })
ServiceType.belongsToMany(Ticket, { through: TicketServiceType })

User.hasOne(TicketView)
TicketView.belongsTo(User)


// Help ticket
User.hasMany(HelpTicket)
HelpTicket.belongsTo(User)

HelpTicket.hasMany(HelpTicketImage)
HelpTicketImage.belongsTo(HelpTicket)


//Profile

User.hasOne(Profile)
Profile.belongsTo(User)

Profile.belongsToMany(ServiceType, { through: ProfileServiceType })
ServiceType.belongsToMany(Profile, { through: ProfileServiceType })

Profile.belongsToMany(FuelType, { through: ProfileFuelType })
FuelType.belongsToMany(Profile, { through: ProfileFuelType })

ProfileType.hasMany(Profile)
Profile.belongsTo(ProfileType)

Profile.hasOne(AutoInfo)
AutoInfo.belongsTo(Profile)

Profile.hasMany(ProfileImage)
ProfileImage.belongsTo(Profile)

// Organization

Profile.hasMany(Organization)
Organization.belongsTo(Profile)

Organization.hasMany(OrganizationImage)
OrganizationImage.belongsTo(Organization)

Organization.hasOne(WorkTime)
WorkTime.belongsTo(Organization)

OrganizationType.hasMany(Organization)
Organization.belongsTo(OrganizationType)

Organization.hasOne(OrganizationCaffe)
OrganizationCaffe.belongsTo(Organization)

Organization.hasOne(OrganizationOvernight)
OrganizationOvernight.belongsTo(Organization)

Organization.hasOne(OrganizationParking)
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