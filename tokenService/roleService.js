import {User, Role, Right, ProfileType} from "../models/index.js";
import ApiError from "../errors/ApiError.js";

class RoleService {
    async create(name, rights) {
        const roleFind = await Role.findOne({where: {name}})
        if (roleFind) {
            throw ApiError.badRequest('Role with this name already exists')
        }
        return await Role.create({name})
    }
    async getRolesForUser(userId) {
        const roles = await Role.findAll({where: {user_id: userId}})

    }
}

export default new RoleService()