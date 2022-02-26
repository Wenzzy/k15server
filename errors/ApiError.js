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
    static param(param) {
        return ApiError.badRequest(`No \`${param}\` parameter was specified.`)
    }
    static unAuth() {
        return ApiError.forbidden(`You are not authorized.`)
    }
}

export default ApiError