import {Router} from 'express';
import ticketController from '../controllers/ticketController.js';
import ticketPermissions from '../routePermissions/ticketPermissions.js';
import {body} from 'express-validator';
import PermissionMiddleware from '../middlewares/PermissionHandler.js';
import AsyncErrorHandler from '../middlewares/AsyncErrorHandler.js';
import ValidateHandler from '../middlewares/ValidateHandler.js';

const router = new Router()

router.post(
    '/',
    PermissionMiddleware(ticketPermissions.create),
    body('service_types').not().isEmpty(),
    body('address').not().isEmpty(),
    ValidateHandler,
    AsyncErrorHandler(ticketController.create)
)

router.put(
    '/my/:id',
    PermissionMiddleware(ticketPermissions.editOneMy),
    body('service_types').not().isEmpty(),
    ValidateHandler,
    AsyncErrorHandler(ticketController.editOneMy)
)

router.put(
    '/:id',
    PermissionMiddleware(ticketPermissions.editOne),
    body('service_types').not().isEmpty(),
    ValidateHandler,
    AsyncErrorHandler(ticketController.editOne)
)

router.get(
    '/all',
    PermissionMiddleware(ticketPermissions.getAll),
    ValidateHandler,
    AsyncErrorHandler(ticketController.getAll)
)

router.get(
    '/all-my',
    PermissionMiddleware(ticketPermissions.getAllMy),
    ValidateHandler,
    AsyncErrorHandler(ticketController.getAllMy)
)

router.get(
    '/:id',
    PermissionMiddleware(ticketPermissions.getOne),
    ValidateHandler,
    AsyncErrorHandler(ticketController.getOne)
)

export default router