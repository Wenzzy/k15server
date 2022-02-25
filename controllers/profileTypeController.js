import ApiError from "../errors/ApiError.js"
import profileTypeService from "../tokenService/profileTypeService.js";
import Pagination from "../utils/Pagination.js";

class profileTypeController {
    async create(req, res, next) {
        try {
            const {name} = req.body
            if (!name) {
                return next(ApiError.badRequest("Param `name` is not defined"))
            }
            res.json(await profileTypeService.create(name))
        } catch (e) {
            next(e)
        }


    }

    async getAll(req, res, next) {
        try {
            const {limit, offset} = Pagination.get(req.query)
            res.json(await profileTypeService.getAll(limit, offset))
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            res.json(await profileTypeService.getOne(id))
        } catch (e) {
            next(e)
        }
    }

}

export default new profileTypeController()