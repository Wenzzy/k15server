export default class ProfileValidator {

    static profileTypeField(profile_type) {
        console.log(profile_type)
        return [1,2,3,4,5].includes(profile_type)
    }

    static distanceField(distance, {req}) {
        return (!([2, 3, 4].includes(req.body.profile_type) && !distance))
    }

    static autoNameField(auto_name, {req}) {
        return (!(req.body.profile_type !== 5 && !auto_name))
    }

    static autoNumberField(auto_number, {req}) {
        return (!(req.body.profile_type !== 5 && !auto_number))
    }

    static weightField(weight, {req}) {
        return (!(req.body.profile_type === 4 && !weight))
    }

    static volumeField(volume, {req}) {
        return (!(req.body.profile_type === 4 && !volume))
    }

    static serviceTypesField(service_types, {req}) {
        return (!(req.body.profile_type === 2 && !Array.isArray(service_types)))
    }

    static fuelTypesField(fuel_types, {req}) {
        return (!(req.body.profile_type === 3 && !Array.isArray(fuel_types)))
    }
}