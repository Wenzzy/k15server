import ApiError from '../errors/ApiError.js'
import {ProfileType} from '../models/index.js';

class ProfileTypeService {
    async create(name) {
        const existsProfileType = await ProfileType.findOne({where: {name}})
        if (existsProfileType) {
            throw ApiError.badRequest('ProfileType with this name already exists')
        }
        return await ProfileType.create({name})
    }
    async getAll(limit, offset) {
        return await ProfileType.findAndCountAll({limit, offset})
    }
    async getOne(id) {
        return await ProfileType.findOne({where: {id}})
    }
}
export default new ProfileTypeService()