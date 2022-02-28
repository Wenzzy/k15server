import ApiError from "../errors/ApiError.js"

export default (req, res, next) => {
    try {
        const {
            full_name,
            profile_type,
            service_types,
            fuel_types,
            auto_name,
            auto_number,
            about,
            distance,
            weight,
            volume,
        } = req.body
        if (!profile_type) return next(ApiError.param('profile_type'))
        if (!full_name) return next(ApiError.param('full_name'))
        if (profile_type !== 5) {
            if (!auto_name) return next(ApiError.param('auto_name'))
            if (!auto_number) return next(ApiError.param('auto_number'))
        }
        switch (profile_type) {
            case 2 : {
                if (!distance) return next(ApiError.param('distance'))
                if (!service_types || !Array.isArray(service_types)) return next(ApiError.param('service_types'))
                break;
            }
            case 3 : {
                if (!distance) return next(ApiError.param('distance'))
                if (!fuel_types || !Array.isArray(fuel_types)) return next(ApiError.param('fuel_types'))
                break;
            }
            case 4 : {
                if (!distance) return next(ApiError.param('distance'))
                if (!weight) return next(ApiError.param('distance'))
                if (!volume) return next(ApiError.param('distance'))
                break;
            }
        }
        next()
    } catch (e) {
        return next(ApiError.noPermissions())
    }
}