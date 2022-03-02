import Pagination from '../utils/Pagination.js';
import TicketService from '../services/TicketService.js';

class ticketController {
    async create(req, res, next) {
        const {id} = req.user
        res.json(await TicketService.create(id, req.body))
    }

    async editOne(req, res, next) {
        const {id} = req.params
        res.json(await TicketService.editOne(id, req.body))
    }

    async editOneMy(req, res, next) {
        const {id} = req.params
        res.json(await TicketService.editOne(id, req.body))
    }

    async getAllMy(req, res, next) {
        const {id} = req.user
        res.json(await TicketService.getTicketsForUser(id))
    }

    async getAll(req, res, next) {
        res.json(await TicketService.getAll(Pagination.get(req.query)))
    }

    async getOne(req, res, next) {
        const {id} = req.params
        res.json(await TicketService.getOne(id))
    }

}

export default new ticketController()