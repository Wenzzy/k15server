import {Router} from 'express';
import authController from '../controllers/authController.js';
import {body} from 'express-validator';
import AuthHandler from '../middlewares/AuthHandler.js';
import authPermissions from '../routePermissions/authPermissions.js';
import PermissionHandler from '../middlewares/PermissionHandler.js';
import ValidateHandler from '../middlewares/ValidateHandler.js';
import AsyncErrorHandler from '../middlewares/AsyncErrorHandler.js';

const router = new Router()

router.post(
    '/send-otp',
    body('phone').isLength({min: 5, max: 20}),
    ValidateHandler,
    AsyncErrorHandler(authController.sendOtp)
)

router.post(
    '/',
    body('phone').isLength({min: 5, max: 20}),
    body('otp').not().isEmpty(),
    ValidateHandler,
    AsyncErrorHandler(authController.login)
)

router.delete(
    '/',
    ValidateHandler,
    AsyncErrorHandler(authController.logout)
)

router.get(
    '/refresh',
    ValidateHandler,
    AsyncErrorHandler(authController.refresh)
)

router.get(
    '/all',
    AuthHandler,
    PermissionHandler(authPermissions.getAll),
    ValidateHandler,
    AsyncErrorHandler(authController.getAll)
)

export default router