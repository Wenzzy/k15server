import ApiError from '../errors/ApiError.js';

export default class ProfileDto {
    id
    full_name
    profile_type
    service_types
    fuel_types
    about
    distance
    weight
    volume
    auto_info

    constructor(model) {
        if (!model) throw ApiError.notFound('Not Found.')

        this.id = model.id
        this.full_name = model.full_name
        this.profile_type = model.ProfileType
        this.service_types = model.ServiceTypes
        this.fuel_types = model.FuelTypes
        this.about = model.about
        this.distance = model.distance
        this.weight = model.weight
        this.volume = model.volume
        this.auto_info = model.auto_info
    }
}