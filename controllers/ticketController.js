import Pagination from '../utils/Pagination.js';
import TicketService from '../services/TicketService.js';

class ticketController {
    async create(req, res) {
        const {id} = req.user
        res.json(await TicketService.create(id, req.body))
    }

    async editOne(req, res) {
        const {id} = req.params
        res.json(await TicketService.editOne(id, req.body))
    }

    async editOneMy(req, res) {
        const {id} = req.params
        res.json(await TicketService.editOneMy(id, req.user.id, req.body))
    }

    async getAllMy(req, res) {
        res.json(await TicketService.getTicketsForUser(req.user.id, Pagination.get(req.query)))
    }

    async getAll(req, res) {
        res.json(await TicketService.getAll(Pagination.get(req.query)))
    }

    async getOne(req, res) {
        const {id} = req.params
        res.json(await TicketService.getOne(id))
    }

}

export default new ticketController()