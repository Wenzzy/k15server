import ApiError from "../errors/ApiError.js"
import userService from "../tokenService/userService.js";
import {validationResult} from "express-validator";
import Pagination from "../utils/Pagination.js";

class UserController {
    async sendOtp(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Error of validation', errors.array()))
            }
            const {phone} = req.body
            if (!phone) {
                return next(ApiError.param('phone'))
            }
            res.json(await userService.sendOtp(phone))
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {phone, otp} = req.body
            if (!phone) {
                return next(ApiError.param('phone'))
            }
            if (!otp) {
                return next(ApiError.param('otp'))
            }
            const userData = await userService.login(phone, otp)
            res.cookie('refreshToken', userData.refreshToken, {httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000})
            res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            res.json(true)

        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000})
            res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async users(req, res, next) {
        try {
            res.json(await userService.getAllUsers(Pagination.get(req.query)))

        } catch (e) {
            next(e)
        }
    }

}

export default new UserController()