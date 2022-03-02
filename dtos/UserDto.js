import ApiError from '../errors/ApiError.js';

export default class UserDto {
    id
    phone

    constructor(model) {
        if (!model) throw ApiError.notFound('Not Found.')
        this.id = model.id
        this.phone = model.phone
    }
}