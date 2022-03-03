import ApiError from '../errors/ApiError.js'
import tokenService from '../services/TokenService.js';
import UserService from '../services/AuthService.js';

export default async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader) return next(ApiError.unAuth())
        const accessToken = authorizationHeader.split(' ')[1]
        if (!accessToken) return next(ApiError.unAuth())
        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) return next(ApiError.unAuth())
        if (!await UserService.checkUserExists(userData.id)) return next(ApiError.unAuth())
        req.user = userData
        next()
    } catch (e) {
        return next(ApiError.unAuth())
    }
}