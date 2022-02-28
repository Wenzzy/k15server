import ApiError from "../errors/ApiError.js"
import ProfileService from "../services/ProfileService.js";
import userService from "../services/UserService.js";
import Pagination from "../utils/Pagination.js";

class profileTypeController {
    async create(req, res, next) {
        try {
            const {id} = req.user
            res.json(await ProfileService.create(id, req.body))
        } catch (e) {
            next(e)
        }
    }

    async editMy(req, res, next) {
        try {
            const {id} = req.user
            res.json(await ProfileService.editMy(id, req.body))
        } catch (e) {
            next(e)
        }
    }
    async editOne(req, res, next) {
        try {
            const {id} = req.params
            res.json(await ProfileService.editOne(id, req.body))
        } catch (e) {
            next(e)
        }
    }
    async getMy(req, res, next) {
        try {
            const {id} = req.user
            res.json(await ProfileService.getProfileForUser(id))
        } catch (e) {
            next(e)
        }
    }

    async getAll(req, res, next) {
        try {
            res.json(await ProfileService.getAll(Pagination.get(req.query)))
        } catch (e) {
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params
            res.json(await ProfileService.getOne(id))
        } catch (e) {
            next(e)
        }
    }

}

export default new profileTypeController()