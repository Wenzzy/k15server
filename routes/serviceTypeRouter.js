import {Router} from 'express';
import PermissionHandler from '../middlewares/PermissionHandler.js';
import {body} from 'express-validator';
import ValidateHandler from '../middlewares/ValidateHandler.js';
import AsyncErrorHandler from '../middlewares/AsyncErrorHandler.js';
import ProfileValidator from '../validators/ProfileValidator.js';
import serviceTypePermissions from "../routePermissions/serviceTypePermissions.js";
import serviceTypeController from "../controllers/serviceTypeController.js";

const router = new Router()

// router.post(
//     '/',
//     PermissionHandler(serviceTypesPermissions.create),
//     body('name').not().isEmpty(),
//     body('label').not().isEmpty(),
//     ValidateHandler,
//     AsyncErrorHandler(profileController.create)
// )
// router.put(
//     '/:id',
//     PermissionHandler(serviceTypesPermissions.editOne),
//     body('name').not().isEmpty(),
//     body('label').not().isEmpty(),
//     ValidateHandler,
//     AsyncErrorHandler(profileController.editOne)
// )

router.get(
    '/all',
    PermissionHandler(serviceTypePermissions.getAll),
    ValidateHandler,
    AsyncErrorHandler(serviceTypeController.getAll)
)

export default router