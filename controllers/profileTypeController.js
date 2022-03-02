import profileTypeService from '../services/ProfileTypeService.js';
import Pagination from '../utils/Pagination.js';

class profileTypeController {
    async create(req, res) {
        const {name} = req.body
        res.json(await profileTypeService.create(name))

    }

    async getAll(req, res) {
        const {limit, offset} = Pagination.get(req.query)
        res.json(await profileTypeService.getAll(limit, offset))

    }

    async getOne(req, res) {
        const {id} = req.params
        res.json(await profileTypeService.getOne(id))
    }

}

export default new profileTypeController()