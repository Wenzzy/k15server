import ApiError from '../errors/ApiError.js'
import RoleService from '../services/RoleService.js';
import RightService from '../services/PermissionService.js';


export default (permission) => async (req, res, next) => {
    const {id} = req.user
    const roles = await RoleService.getRolesForUser(id)
    if (!roles) return next(ApiError.noPermissions())
    const canWatch = RightService.checkPermissions(roles, permission)
    if (!canWatch) return next(ApiError.noPermissions())
    next()
}