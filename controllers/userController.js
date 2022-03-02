import userService from '../services/UserService.js';
import Pagination from '../utils/Pagination.js';
import Cookies from '../utils/Cookies.js';

class UserController {
    async sendOtp(req, res) {
        const {phone} = req.body
        res.json(await userService.sendOtp(phone))
    }

    async login(req, res) {
        const {phone, otp} = req.body
        const userData = await userService.login(phone, otp)
        res.cookie(Cookies.refreshTokenField, userData.refreshToken, Cookies.refreshTokenOptions)
        res.json(userData)
    }

    async logout(req, res) {
        const {refreshToken} = req.cookies
        await userService.logout(refreshToken)
        res.clearCookie(Cookies.refreshTokenField)
        res.json(true)
    }

    async refresh(req, res) {
        const {refreshToken} = req.cookies
        const userData = await userService.refresh(refreshToken)
        res.cookie(Cookies.refreshTokenField, userData.refreshToken, Cookies.refreshTokenOptions)
        res.json(userData)
    }

    async getAll(req, res) {
        res.json(await userService.getAll(Pagination.get(req.query)))
    }

}

export default new UserController()