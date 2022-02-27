import {User, Role, Permission, ProfileType} from "../models/index.js";
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
        return await Role.findAll({
            include: [
                {
                    model: User,
                    where: {id: userId},
                    attributes: ["id"]
                },
                {
                    model: Permission,
                    attributes: ["id", "name"]
                }
            ]
        })
    }
}

export default new RoleService()