import {
    User,
    ServiceType,
    Ticket
} from '../models/index.js';
import ApiError from '../errors/ApiError.js';
import {Sequelize} from 'sequelize';
import TicketDto from '../dtos/TicketDto.js';

class TicketService {

    defaultAttributes = [
        'id', 'address', 'longitude', 'latitude', 'phone', 'status', 'use_user_phone'
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
        const ticketsFind = await Ticket.findAndCountAll({
            where: {
                user_id: userId,
                status: {[Sequelize.Op.or]: [0, 2]}
            }
        })
        if (ticketsFind.count > 10) throw ApiError.badRequest('You have maximum active tickets.')
        const ticket = await Ticket.create({
            userId,
            address: data?.address,
            longitude: data?.longitude,
            latitude: data?.latitude,
            phone: data?.phone,
            use_user_phone: data?.use_user_phone,
        })
        await ticket.setServiceTypes(data?.service_types)
        return await this.getOne(ticket.id)

    }

    async editOne(ticketId, data) {
        const ticketFind = await Ticket.findOne({where: {id: ticketId}, attributes: ['id']})
        if (!ticketFind) throw ApiError.badRequest('Ticket not found.')
        await Ticket.update({
            address: data?.address,
            longitude: data?.longitude,
            latitude: data?.latitude,
            phone: data?.phone,
            use_user_phone: data?.use_user_phone,
        }, {
            where: {id: ticketFind.id}
        })
        await ticketFind.setServiceTypes(data?.service_types)
        return await this.getOne(ticketFind.id)
    }

    async editOneMy(ticketId, userId, data) {
        const ticketFind = await Ticket.findOne({where: {id: ticketId, userId}, attributes: ["id"]})
        if (!ticketFind) throw ApiError.noPermissions()
        return await this.editOne(ticketId, data)
    }

    async getTicketsForUser(userId, {limit, offset, sort_by, sort_method}) {
        return await Ticket.findAndCountAll({
            attributes: this.defaultAttributes,
            include: [
                {
                    model: User,
                    where: {id: userId},
                    attributes: []
                },
                ...this.defaultIncludes
            ],
            order: [[sort_by, sort_method]],
            limit,
            offset,
        })
    }

    async getOne(ticketId) {
        return new TicketDto(await Ticket.findByPk(ticketId, {
            attributes: this.defaultAttributes,
            include: this.defaultIncludes
        }))
    }

    async getAll({limit, offset, sort_by, sort_method}) {
        return await Ticket.findAndCountAll({
            limit,
            offset,
            order: [[sort_by, sort_method]],
            attributes: this.defaultAttributes,
            include: this.defaultIncludes
        })
    }
}

export default new TicketService()