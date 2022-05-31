import ApiError from '../errors/ApiError.js'
import {ServiceType} from '../models/index.js';

class ServiceTypeService {
    // async create(name) {
    //     const existsProfileType = await ProfileType.findOne({where: {name}})
    //     if (existsProfileType) {
    //         throw ApiError.badRequest('ProfileType with this name already exists')
    //     }
    //     return await ProfileType.create({name})
    // }
    async getAll({limit, offset, sort_by, sort_method}) {
        return await ServiceType.findAndCountAll({limit, offset,  order: [[sort_by, sort_method]]})
    }
    // async getOne(id) {
    //     return await ProfileType.findOne({where: {id}})
    // }
}
export default new ServiceTypeService()