import ProfileService from '../services/ProfileService.js';
import Pagination from '../utils/Pagination.js';

class profileTypeController {
    async create(req, res, next) {
        const {id} = req.user
        res.json(await ProfileService.create(id, req.body))
    }

    async editMy(req, res, next) {
        const {id} = req.user
        res.json(await ProfileService.editMy(id, req.body))
    }

    async editOne(req, res, next) {
        const {id} = req.params
        res.json(await ProfileService.editOne(id, req.body))
    }

    async getMy(req, res, next) {
        const {id} = req.user
        res.json(await ProfileService.getProfileForUser(id))
    }

    async getAll(req, res, next) {
        res.json(await ProfileService.getAll(Pagination.get(req.query)))
    }

    async getOne(req, res, next) {
        const {id} = req.params
        res.json(await ProfileService.getOne(id))
    }

}

export default new profileTypeController()