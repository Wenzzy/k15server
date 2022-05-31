
import Pagination from '../utils/Pagination.js';
import ServiceTypeService from '../services/ServiceTypeService.js';

class profileTypeController {
    // async create(req, res) {
    //     const {name} = req.body
    //     res.json(await profileTypeService.create(name))
    //
    // }

    async getAll(req, res) {
       res.json(await ServiceTypeService.getAll(Pagination.get(req.query)))

    }
    //
    // async getOne(req, res) {
    //     const {id} = req.params
    //     res.json(await profileTypeService.getOne(id))
    // }

}

export default new profileTypeController()