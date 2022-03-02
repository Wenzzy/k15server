import {Router} from 'express';
import profileController from '../controllers/profileController.js';
import profilePermissions from '../routePermissions/profilePermissions.js';
import PermissionHandler from '../middlewares/PermissionHandler.js';
import {body} from 'express-validator';
import ValidateHandler from '../middlewares/ValidateHandler.js';
import AsyncErrorHandler from '../middlewares/AsyncErrorHandler.js';
import ProfileValidator from '../validators/ProfileValidator.js';

const router = new Router()

router.post(
    '/',
    PermissionHandler(profilePermissions.create),
    body('profile_type').custom(ProfileValidator.profileTypeField),
    body('full_name').not().isEmpty(),
    body('distance').custom(ProfileValidator.distanceField),
    body('weight').custom(ProfileValidator.weightField),
    body('volume').custom(ProfileValidator.volumeField),
    body('service_types').custom(ProfileValidator.serviceTypesField),
    body('fuel_types').custom(ProfileValidator.fuelTypesField),
    body('auto_name').custom(ProfileValidator.autoNameField),
    body('auto_number').custom(ProfileValidator.autoNumberField),
    ValidateHandler,
    AsyncErrorHandler(profileController.create)
)
router.put(
    '/',
    PermissionHandler(profilePermissions.editMy),
    body('profile_type').custom(ProfileValidator.profileTypeField),
    body('full_name').not().isEmpty(),
    body('distance').custom(ProfileValidator.distanceField),
    body('weight').custom(ProfileValidator.weightField),
    body('volume').custom(ProfileValidator.volumeField),
    body('service_types').custom(ProfileValidator.serviceTypesField),
    body('fuel_types').custom(ProfileValidator.fuelTypesField),
    body('auto_name').custom(ProfileValidator.autoNameField),
    body('auto_number').custom(ProfileValidator.autoNumberField),
    ValidateHandler,
    AsyncErrorHandler(profileController.editMy)
)
router.put(
    '/:id',
    PermissionHandler(profilePermissions.editOne),
    body('profile_type').custom(ProfileValidator.profileTypeField),
    body('full_name').not().isEmpty(),
    body('distance').custom(ProfileValidator.distanceField),
    body('weight').custom(ProfileValidator.weightField),
    body('volume').custom(ProfileValidator.volumeField),
    body('service_types').custom(ProfileValidator.serviceTypesField),
    body('fuel_types').custom(ProfileValidator.fuelTypesField),
    body('auto_name').custom(ProfileValidator.autoNameField),
    body('auto_number').custom(ProfileValidator.autoNumberField),
    ValidateHandler,
    AsyncErrorHandler(profileController.editOne)
)
router.get(
    '/',
    PermissionHandler(profilePermissions.getMy),
    ValidateHandler,
    AsyncErrorHandler(profileController.getMy)
)
router.get(
    '/all',
    PermissionHandler(profilePermissions.getAll),
    ValidateHandler,
    AsyncErrorHandler(profileController.getAll)
)
router.get(
    '/:id',
    PermissionHandler(profilePermissions.getOne),
    ValidateHandler,
    AsyncErrorHandler(profileController.getOne)
)

export default router