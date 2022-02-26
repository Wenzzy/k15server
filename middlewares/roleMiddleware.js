import ApiError from "../errors/ApiError.js"
import tokenService from "../tokenService/tokenService.js";


export default (right) => (req, res, next) => {
    const {id} = req.user
    if (!id) return next(ApiError.unAuth())
    next()
}