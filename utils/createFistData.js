import {
    Role,
    Permission,
    RolePermission,
    ServiceType,
    ProfileType,
    OrganizationType,
    FuelType
} from '../models/index.js'

export default async () => {
    await RolePermission.sync({force:true})
    await Permission.sync({force: true}).then(async () => {
        await Permission.bulkCreate([
            {name: `api.user.getAll`, label: 'получить всех пользователей'}, // 1
            {name: 'api.user.getOne', label: 'получить пользователя по id'}, // 2

            {name: 'api.profileType.getAll', label: 'получить все типы профиля'}, // 3
            {name: 'api.profileType.getOne', label: 'получить тип профиля по id'}, // 4

            {name: 'api.profile.create', label: 'создать профиль'}, // 5
            {name: 'api.profile.editMy', label: 'изменить свой профиль'}, // 6
            {name: 'api.profile.editOne', label: 'изменить профиль по id'}, // 7
            {name: 'api.profile.getMy', label: 'получить свой профиль'}, // 8
            {name: 'api.profile.getOne', label: 'получить профиль по id'}, // 9
            {name: 'api.profile.getAll', label: 'получить все профили'}, // 10

            {name: 'api.ticket.create', label: 'создать тикет'}, // 11
            {name: 'api.ticket.editOne', label: 'изменить тикет по id'}, // 12
            {name: 'api.ticket.editOneMy', label: 'изменить свой тикет по id'}, // 13
            {name: 'api.ticket.getOne', label: 'получить тикет по id'}, // 14
            {name: 'api.ticket.getAllMy', label: 'получить все свои тикеты'}, // 15
            {name: 'api.ticket.getAll', label: 'получить все тикеты'}, // 16

        ])
    })

    const rights = {
        administrator: [],
        moderator: [1, 2, 7, 9, 10, 12, 16],
        helper: [],
        user: [3, 4, 5, 6, 7, 8, 11, 13, 14, 15]
    }
    await Role.sync({force: true}).then(async () => {
        await Role.create({name: 'administrator', label: 'администратор'}).then(async role => {
            const hierarchy = [...new Set([
                ...rights.user, ...rights.helper, ...rights.moderator, ...rights.administrator
            ])]
            await role.setPermissions(hierarchy)
        })
        await Role.create({name: 'moderator', label: 'модератор'}).then(async role => {
            const hierarchy = [...new Set([
                ...rights.user, ...rights.helper, ...rights.moderator
            ])]
            await role.setPermissions(hierarchy)
        })
        await Role.create({name: 'helper', label: 'помощь'}).then(async role => {
            const hierarchy = [...new Set([
                ...rights.user, ...rights.helper
            ])]
            await role.setPermissions(hierarchy)
        })
        await Role.create({name: 'user', label: 'пользователь'}).then(async role => {
            await role.setPermissions(rights.user)
        })
    })
    await ServiceType.sync({force: true}).then(async () => {
        await ServiceType.bulkCreate([
            {name: 'tire_fitting', label: 'шиномонтаж'},
            {name: 'engine', label: 'двигатель'},
            {name: 'transmission', label: 'трансмиссия'},
            {name: 'battery', label: 'аккумулятор'},
            {name: 'end_fuel', label: 'закончилось топливо'},
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
    await FuelType.sync({force: true}).then(async () => {
        await FuelType.bulkCreate([
            {name: 'ai92', label: 'АИ-92'},
            {name: 'ai95', label: 'АИ-95'},
            {name: 'ai98', label: 'АИ-98'},
            {name: 'ai100', label: 'АИ-100'},
            {name: 'dt', label: 'ДТ'},
        ])
    })
}
