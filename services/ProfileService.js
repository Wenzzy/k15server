import {
    User,
    Profile,
    AutoInfo,
    ProfileType,
    ServiceType,
    FuelType
} from '../models/index.js';
import ApiError from '../errors/ApiError.js';
import ProfileDto from '../dtos/ProfileDto.js';

class ProfileService {

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
        const profileFind = await Profile.findOne({where: {user_id: userId}})
        if (profileFind) throw ApiError.badRequest('You have an profile.')
        const profile = await Profile.create({
            userId,
            full_name: data?.full_name,
            about: data?.about,
            distance: data?.distance,
            weight: data?.weight,
            volume: data?.volume,
            auto_info: {
                auto_name: data?.auto_name,
                auto_number: data?.auto_number
            }
        }, {
            include: [
                {
                    model: AutoInfo,
                }
            ],
        })
        await profile.setProfileType(data?.profile_type)
        await profile.setFuelTypes(data?.fuel_types)
        await profile.setServiceTypes(data?.service_types)
        return await this.getOne(profile.id)

    }

    async editMy(userId, data) {
        return await this.editOne(userId, data)

    }

    async editOne(userId, data) {
        const profileFind = await Profile.findOne({where: {user_id: userId}, attributes: ['id']})
        if (!profileFind) throw ApiError.badRequest('Profile not found.')
        await Profile.update({
            full_name: data?.full_name,
            about: data?.about,
            distance: data?.distance,
            weight: data?.weight,
            volume: data?.volume,
            profileTypeId: data?.profile_type,
        }, {where: {id: profileFind.id}})

        await AutoInfo.update({
            auto_name: data?.auto_name,
            auto_number: data?.auto_number
        }, {where: {profile_id: profileFind.id}})

        await profileFind.setProfileType(data?.profile_type)
        await profileFind.setServiceTypes(data?.service_types)
        await profileFind.setFuelTypes(data?.fuel_types)

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

    async getAll({limit, offset, sort_by, sort_method}) {
        return await Profile.findAndCountAll({
            limit,
            offset,
            order: [[sort_by, sort_method]],
            attributes: this.defaultAttributes,
            include: this.defaultIncludes
        })
    }
    async checkHaveMy(userId) {
        return await Profile.findOne({
            attributes: ['id'],
            include: [
                {
                    model: User,
                    where: {id: userId},
                    attributes: []
                },
            ]
        })
    }
}

export default new ProfileService()