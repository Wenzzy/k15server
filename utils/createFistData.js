import {Role, ServiceType, ProfileType, OrganizationType} from "../models/index.js"

export default async () => {
    await Role.sync({force: true}).then(async () => {
        await Role.bulkCreate([
            {name: "administrator", label: "администратор"},
            {name: "moderator", label: "модератор"},
            {name: "helper", label: "помощь"},
            {name: "user", label: "пользователь"},
        ])
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
