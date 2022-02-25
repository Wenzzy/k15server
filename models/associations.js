import {AutoInfo} from "./AutoInfo-model.js";
import {Dialog} from "./Dialog-model.js";
import {FuelType} from "./FuelType-model.js";
import {HelpMessage} from "./HelpMessage-model.js";
import {HelpTicket} from "./HelpTicket-model.js";
import {HelpTicketImage} from "./HelpTicketImage-model.js";
import {Message} from "./Message-model.js";
import {Order} from "./Order-model.js";
import {Organization} from "./Organization-model.js";
import {OrganizationCaffe} from "./OrganizationCaffe-model.js";
import {OrganizationImage} from "./OrganizationImage-model.js";
import {OrganizationOvernight} from "./OrganizationOvernight-model.js";
import {OrganizationParking} from "./OrganizationParking-model.js";
import {OrganizationType} from "./OrganizationType-model.js";
import {OvernightType} from "./OvernightType-model.js";
import {Profile} from "./Profile-model.js";
import {ProfileFuelType} from "./ProfileFuelType-model.js";
import {ProfileImage} from "./ProfileImage-model.js";
import {ProfileServiceType} from "./ProfileServiceType-model.js";
import {ProfileType} from "./ProfileType-model.js";
import {Right} from "./Right-model.js";
import {Role} from "./Role-model.js";
import {RoleRight} from "./RoleRight-model.js";
import {ServiceType} from "./ServiceType-model.js";
import {Ticket} from "./Ticket-model.js";
import {TicketImage} from "./TicketImage-model.js";
import {TicketServiceType} from "./TicketServiceType-model.js";
import {TicketView} from "./TicketView-model.js";
import {Token} from "./Token-model.js";
import {User} from "./User-model.js";
import {UserRating} from "./UserRating-model.js";
import {UserDialog} from "./UserDialog-model.js";
import {WorkTime} from "./WorkTime-model.js";

// Rating for user
UserRating.belongsTo(User, { as:'user_from', foreignKey: 'user_from_id'});
UserRating.belongsTo(User, { as:'user_for', foreignKey: 'user_for_id'});


// Roles and rights for user
User.hasMany(Role)
Role.belongsTo(User)

Role.belongsToMany(Right, { through: RoleRight })
Right.belongsToMany(Role, { through: RoleRight })

// Token for user
User.hasOne(Token)
Token.belongsTo(User)

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