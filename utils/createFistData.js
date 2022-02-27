import {Role, Permission, RolePermission, ServiceType, ProfileType, OrganizationType} from "../models/index.js"

export default async () => {
    await RolePermission.sync({force:true})
    await Permission.sync({force: true}).then(async () => {
        await Permission.bulkCreate([
            {name: "api.user.getAll", label: "получить всех пользователей"},
            {name: "api.user.getOne", label: "получить пользователя по id"},
            {name: "api.profileType.getAll", label: "получить все типы профиля"},
            {name: "api.profileType.getOne", label: "получить тип профиля по id"},
        ])
    })
    const rights = {
        administrator: [],
        moderator: [1, 2],
        helper: [],
        user: [3, 4]
    }
    await Role.sync({force: true}).then(async () => {
        await Role.create({name: "administrator", label: "администратор"}).then(async role => {
            const hierarchy = [...new Set([
                ...rights.user, ...rights.helper, ...rights.moderator, ...rights.administrator
            ])]
            await role.setPermissions(hierarchy)
        })
        await Role.create({name: "moderator", label: "модератор"}).then(async role => {
            const hierarchy = [...new Set([
                ...rights.user, ...rights.helper, ...rights.moderator
            ])]
            await role.setPermissions(hierarchy)
        })
        await Role.create({name: "helper", label: "помощь"}).then(async role => {
            const hierarchy = [...new Set([
                ...rights.user, ...rights.helper
            ])]
            await role.setPermissions(hierarchy)
        })
        await Role.create({name: "user", label: "пользователь"}).then(async role => {
            await role.setPermissions(rights.user)
        })
    })
    await ServiceType.sync({force: true}).then(async () => {
        await ServiceType.bulkCreate([
            {name: "tire_fitting", label: "шиномонтаж"},
            {name: "engine", label: "двигатель"},
            {name: "transmission", label: "трансмиссия"},
            {name: "battery", label: "аккумулятор"},
            {name: "end_fuel", label: "закончилось топливо"},
        ])
    })
    await ProfileType.sync({force: true}).then(async () => {
        await ProfileType.bulkCreate([
            {name: 'driver', label: 'водитель'},
            {name: 'master', label: 'мастер'},
            {name: 'tanker', label: 'заправщик'},
            {name: 'carrier', label: 'неревозчик'},
            {name: 'organization', label: 'организация'},
        ])
    })
    await OrganizationType.sync({force: true}).then(async () => {
        await OrganizationType.bulkCreate([
            {name: 'caffe', label: 'кафе'},
            {name: 'overnight', label: 'ночлег'},
            {name: 'parking', label: 'парковка'},
        ])
    })
}
