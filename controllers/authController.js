import AuthService from '../services/AuthService.js';
import Pagination from '../utils/Pagination.js';
import Cookies from '../utils/Cookies.js';

class AuthController {
    async sendOtp(req, res) {
        const {phone} = req.body
        res.json(await AuthService.sendOtp(phone))
    }

    async login(req, res) {
        const {phone, otp} = req.body
        const userData = await AuthService.login(phone, otp)
        res.cookie(Cookies.refreshTokenField, userData.refreshToken, Cookies.refreshTokenOptions)
        res.json(userData)
    }

    async logout(req, res) {
        const {refreshToken} = req.cookies
        await AuthService.logout(refreshToken)
        res.clearCookie(Cookies.refreshTokenField)
        res.json(true)
    }

    async refresh(req, res) {
        const {refreshToken} = req.cookies
        const userData = await AuthService.refresh(refreshToken)
        res.cookie(Cookies.refreshTokenField, userData.refreshToken, Cookies.refreshTokenOptions)
        res.json(userData)
    }

    async getAll(req, res) {
        res.json(await AuthService.getAll(Pagination.get(req.query)))
    }

}

export default new AuthController()