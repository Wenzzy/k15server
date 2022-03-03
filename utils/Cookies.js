export default {
    refreshTokenField: 'refreshToken',
    refreshTokenOptions: {httpOnly: true, maxAge: process.env.JWT_REFRESH_EXPIRES_D * 24 * 60 * 60 * 1000, secure:true, sameSite: 'lax'}
}