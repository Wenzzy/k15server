import {Router} from "express";
import profileController from "../controllers/profileController.js";
import profileCreateValidator from "../validators/profileCreateValidator.js";
import roleMiddleware from "../middlewares/PermissionMiddleware.js";
import profilePermissions from "../routePermissions/profilePermissions.js";

const router = new Router()

router.post('/', roleMiddleware(profilePermissions.create), profileCreateValidator, profileController.create)
router.put('/', roleMiddleware(profilePermissions.editMy), profileCreateValidator, profileController.editMy)
router.put('/:id', roleMiddleware(profilePermissions.editOne), profileCreateValidator, profileController.editOne)
router.get('/', roleMiddleware(profilePermissions.getMy), profileController.getMy)
router.get('/all', roleMiddleware(profilePermissions.getAll), profileController.getAll)
router.get('/:id', roleMiddleware(profilePermissions.getOne), profileController.getOne)

export default router