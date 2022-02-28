import {
    User,
    Role,
    Permission,
    Profile,
    AutoInfo,
    ProfileType,
    ServiceType,
    FuelType,
    ProfileServiceType
} from "../models/index.js";
import ApiError from "../errors/ApiError.js";
import ProfileDto from "../dtos/ProfileDto.js";

class RoleService {

    defaultAttributes = [
        'id', 'full_name', 'about', 'distance', 'weight', 'volume'
    ]
    defaultIncludes = [
        {
            model: AutoInfo,
            attributes: ['id', 'auto_name', 'auto_number']
        },
        {
            model: ProfileType,
            as: "ProfileType",
            attributes: ['id', 'name', 'label']
        },
        {
            model: ServiceType,
            as: "ServiceTypes",
            through: {attributes: []},
            attributes: ['id', 'name', 'label'],

        },
        {
            model: FuelType,
            attributes: ['id', 'name', 'label'],
            through: {attributes: []},
            as: "FuelTypes",
        },
    ]

    async create(userId, data) {
        const {
            full_name,
            profile_type,
            service_types,
            fuel_types,
            auto_name,
            auto_number,
            about,
            distance,
            weight,
            volume
        } = data
        const profileFind = await Profile.findOne({where: {user_id: userId}})
        if (profileFind) throw ApiError.badRequest('You have an profile.')
        const profile = await Profile.create({
            full_name,
            userId,
            about,
            distance,
            weight,
            volume,
            auto_info: {
                auto_name,
                auto_number
            }
        }, {
            include: [
                {
                    model: AutoInfo,
                }
            ],
        })
        await profile.setProfileType(profile_type)
        await profile.setFuelTypes(fuel_types)
        await profile.setServiceTypes(service_types)
        return await this.getOne(profile.id)

    }

    async editMy(userId, data) {
        return await this.editOne(userId, data)

    }

    async editOne(userId, data) {
        const {
            full_name,
            profile_type,
            service_types,
            fuel_types,
            auto_name,
            auto_number,
            about,
            distance,
            weight,
            volume
        } = data
        const profileFind = await Profile.findOne({where: {user_id: userId}, attributes: ['id']})
        if (!profileFind) throw ApiError.badRequest('Profile not found.')
        await Profile.update({
            full_name,
            about,
            distance,
            weight,
            volume,
            profileTypeId: profile_type,
        }, {where: {id: profileFind.id}})

        await AutoInfo.update({
            auto_name,
            auto_number
        }, {where: {profile_id: profileFind.id}})

        await profileFind.setProfileType(profile_type)
        await profileFind.setServiceTypes(service_types)
        await profileFind.setFuelTypes(fuel_types)

        return await this.getOne(profileFind.id)
    }

    async getProfileForUser(userId) {
        return new ProfileDto(await Profile.findOne({
            attributes: this.defaultAttributes,
            include: [
                {
                    model: User,
                    where: {id: userId},
                    attributes: []
                },
                ...this.defaultIncludes
            ]
        }))
    }

    async getOne(profileId) {
        return new ProfileDto(await Profile.findByPk(profileId, {
            attributes: this.defaultAttributes,
            include: this.defaultIncludes
        }))
    }

    async getAll({limit, offset}) {
        return await Profile.findAndCountAll({
            limit,
            offset,
            attributes: this.defaultAttributes,
            include: this.defaultIncludes
        })
    }
}

export default new RoleService()