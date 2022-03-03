import ApiError from '../errors/ApiError.js';

export default class TicketDto {
    id
    address
    longitude
    latitude
    phone
    status
    use_user_phone
    service_types

    constructor(model) {
        if (!model) throw ApiError.notFound('Not Found.')

        this.id = model.id
        this.address = model.address
        this.longitude = model.longitude
        this.latitude = model.latitude
        this.phone = model.phone
        this.status = model.status
        this.use_user_phone = model.use_user_phone
        this.service_types = model.ServiceTypes

    }
}