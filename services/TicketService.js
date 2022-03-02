import {
    User,
    Profile,
    ServiceType,
    Ticket
} from '../models/index.js';
import ApiError from '../errors/ApiError.js';
import {Sequelize} from 'sequelize';
import TicketDto from '../dtos/TicketDto.js';

class TicketService {

    defaultAttributes = [
        'id', 'address', 'longitude', 'latitude', 'phone', 'use_user_phone'
    ]
    defaultIncludes = [
        {
            model: ServiceType,
            as: "ServiceTypes",
            through: {attributes: []},
            attributes: ['id', 'name', 'label'],

        }
    ]

    async create(userId, data) {
        const {
            address,
            longitude,
            latitude,
            phone,
            use_user_phone,
            service_types
        } = data
        const ticketsFind = await Ticket.findAndCountAll({
            where: {
                user_id: userId,
                status: {[Sequelize.Op.or]: [0, 2]}
            }
        })
        if (ticketsFind.count > 10) throw ApiError.badRequest('You have maximum active tickets.')
        const tickets = await Ticket.create({
            address,
            userId,
            longitude,
            latitude,
            phone,
            use_user_phone,
        })
        await tickets.setServiceTypes(service_types)
        return await this.getOne(tickets.id)

    }

    async editOne(ticketId, data) {
        const {
            address,
            longitude,
            latitude,
            phone,
            use_user_phone,
            service_types
        } = data
        const ticketFind = await Profile.findOne({where: {id: id}, attributes: ['id']})
        if (!ticketFind) throw ApiError.badRequest('Ticket not found.')
        const ticket = await Ticket.update({
            address,
            longitude,
            latitude,
            phone,
            use_user_phone,
        }, {
            where: {id: ticketFind.id},
            returning: true
        })
        console.log(ticket)


        // await ticketFind.setServiceTypes(service_types)

        // return await this.getOne(ticketFind.id)
        return {}
    }

    async getTicketsForUser(userId) {
        return new TicketDto(await Ticket.findOne({
            attributes: this.defaultAttributes,
            include: [
                {
                    model: User,
                    where: {id: userId},
                    attributes: []
                },
                ...this.defaultIncludes
            ]
        }))
    }

    async getOne(ticketId) {
        return new TicketDto(await Ticket.findByPk(ticketId, {
            attributes: this.defaultAttributes,
            include: this.defaultIncludes
        }))
    }

    async getAll({limit, offset}) {
        return await Ticket.findAndCountAll({
            limit,
            offset,
            attributes: this.defaultAttributes,
            include: this.defaultIncludes
        })
    }
}

export default new TicketService()