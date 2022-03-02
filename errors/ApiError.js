class ApiError extends Error {
    constructor(status, message, errors = []) {
        super()
        this.status = status
        this.message = message
        this.errors = errors
    }

    static badRequest(message, errors=[]) {
        return new ApiError(400, message, errors)
    }
    static internal(message, errors=[]) {
        return new ApiError(500, message, errors)
    }
    static forbidden(message, errors=[]) {
        return new ApiError(403, message, errors)
    }
    static authorization(message, errors=[]) {
        return new ApiError(401, message, errors)
    }
    static notFound(message, errors=[]) {
        return new ApiError(404, message, errors)
    }
    static param(param) {
        return ApiError.badRequest(`No \`${param}\` parameter was specified.`)
    }
    static unAuth() {
        return ApiError.authorization(`You are not authorized.`)
    }
    static noPermissions() {
        return ApiError.forbidden(`Access denied.`)
    }
}

export default ApiError