import {User} from "../models/index.js";
import ApiError from "../errors/ApiError.js";

class UserService {
    async registration(phone) {
        //...

        const existsUser = await User.findOne({where: {phone}})
        console.log(existsUser)
        if (existsUser) {
            throw ApiError.badRequest("User with this phone already registered")
        }
        const activateCode = String(Math.floor(100000 + Math.random() * 900000))
        const user = await User.create({
            phone,
            activateCode
        })
        user.save()
        console.log(`TWILIO SENT CODE: ${activateCode}`)

        return {user}


    }

    async login(phone) {
        //...
    }
}

export default new UserService()