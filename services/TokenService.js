import {Token} from '../models/index.js';
import jwt from 'jsonwebtoken'

class TokenService {
    async generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_PRIVATE, {expiresIn: `${process.env.JWT_ACCESS_EXPIRES_M}m`})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_PRIVATE, {expiresIn: `${process.env.JWT_REFRESH_EXPIRES_D}d`})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({where: {user_id: userId}})
        if (tokenData) {
            tokenData.token = refreshToken
            return tokenData.save()
        }
        return await Token.create({token: refreshToken, userId})
    }

    validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_PRIVATE)
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_PRIVATE)
        } catch (e) {
            return null
        }
    }
    async findToken(refreshToken) {
        return await Token.findOne({where: {token: refreshToken}})
    }


    async removeToken(refreshToken) {
        return await Token.destroy({where: {token: refreshToken}})
    }
}

export default new TokenService()