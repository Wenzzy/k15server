import ApiError from "../errors/ApiError.js"
import userService from "../tokenService/userService.js";

class UserController {
    async registration(req, res, next) {
        try {
            const {phone} = req.body
            if (!phone) {
                next(ApiError.badRequest("Param `phone` is not defined"))
            }
            res.json(await userService.registration(phone))
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async activate(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async check(req, res, next) {
        try {
            const {id} = req.query
            if (!id) {
                return next(ApiError.badRequest("Param `id` is not defined"))
            }
            res.json({ms: id})
        } catch (e) {
            next(e)
        }
    }

    async users(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

}

export default new UserController()