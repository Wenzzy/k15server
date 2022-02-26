export default class UserDto {
    id
    phone

    constructor(model) {
        this.id = model.id
        this.phone = model.phone
    }
}