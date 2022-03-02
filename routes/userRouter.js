import {Router} from 'express';
import userController from '../controllers/userController.js';
import {body} from 'express-validator';
import AuthHandler from '../middlewares/AuthHandler.js';
import userPermissions from '../routePermissions/userPermissions.js';
import PermissionHandler from '../middlewares/PermissionHandler.js';
import ValidateHandler from '../middlewares/ValidateHandler.js';
import AsyncErrorHandler from '../middlewares/AsyncErrorHandler.js';

const router = new Router()

router.post(
    '/send-otp',
    body('phone').isLength({min: 5, max: 20}),
    ValidateHandler,
    AsyncErrorHandler(userController.sendOtp)
)

router.post(
    '/',
    body('phone').isLength({min: 5, max: 20}),
    body('otp').not().isEmpty(),
    ValidateHandler,
    AsyncErrorHandler(userController.login)
)

router.delete(
    '/',
    ValidateHandler,
    AsyncErrorHandler(userController.logout)
)

router.get(
    '/refresh',
    ValidateHandler,
    AsyncErrorHandler(userController.refresh)
)

router.get(
    '/all',
    AuthHandler,
    PermissionHandler(userPermissions.getAll),
    ValidateHandler,
    AsyncErrorHandler(userController.getAll)
)

export default router