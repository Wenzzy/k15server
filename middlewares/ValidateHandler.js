import {validationResult} from 'express-validator';
import ApiError from '../errors/ApiError.js'

export default (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(ApiError.badRequest('Error of validation', errors.array()))
    }
    next()
}