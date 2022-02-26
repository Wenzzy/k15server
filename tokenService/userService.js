import {Otp, User} from "../models/index.js";
import ApiError from "../errors/ApiError.js";
import TokenService from "./tokenService.js";
import UserDto from "../dtos/UserDto.js";
import tokenService from "./tokenService.js";
import bcrypt from "bcrypt"
import otpGenerator from "otp-generator"

class UserService {
    async sendOtp(phone) {
        let user = await User.findOne({where: {phone}})
        const otp = otpGenerator.generate(6, {
            digits: true,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
        })
        const expires = Date.now() + (5 * 60 * 1000)
        const otpHash = await bcrypt.hash(otp, await bcrypt.genSalt(6))
        if (!user) user = await User.create({phone})
        const existsOtp = await Otp.findOne({ where: { user_id: user.id }})
        if (existsOtp) {
            existsOtp.otp = otpHash
            existsOtp.expires = expires
            existsOtp.save()
        } else {
            await Otp.create({otp: otpHash, expires, userId: user.id})
        }
        console.log(`TWILIO SENT CODE: ${otp}`)
        return {
            message: "Sent."
        }
    }

    async login(phone, otp) {
        const userFind = await User.findOne({where: {phone}})
        if (!userFind) throw ApiError.badRequest("User with this phone not registered.")
        const otpFind = await Otp.findOne({where: {user_id: userFind.id}})
        if (!otpFind || otpFind.expires < Date.now()) throw ApiError.badRequest("Bad OTP.")
        if (await bcrypt.compare(otp, otpFind.otp)) otpFind.destroy()
        else throw ApiError.badRequest("Bad OTP.")
        return await this.generateTokensForUser(userFind)
    }

    async logout(refreshToken) {
        if (!refreshToken) {
            throw ApiError.unAuth()
        }
        return await TokenService.removeToken(refreshToken)
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.unAuth()
        }
        const userData = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.unAuth()
        }
        const user = await User.findByPk(userData.id)
        return await this.generateTokensForUser(user)
    }

    async generateTokensForUser(user) {
        const userDto = new UserDto(user)
        const tokens = await TokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    async getAllUsers({limit, offset}) {
        return await User.findAndCountAll({limit, offset})
    }

}

export default new UserService()