import {Permission} from '../models/index.js';
import ApiError from '../errors/ApiError.js';

class PermissionService {
    async checkPermissions(roles, permission) {
        let userPermissions = []
        roles.forEach(role => {
            userPermissions = [...userPermissions, ...role.Permissions]
        })
        return userPermissions.some(el => el.name === permission)
    }
}

export default new PermissionService()