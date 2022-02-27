import {Router} from "express";
import userController from "../controllers/userController.js";
import {body} from "express-validator";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/PermissionMiddleware.js";
import userRights from "../routePermissions/userPermissions.js";


const router = new Router()

router.post('/send-otp',
    body('phone').isLength({min: 5, max: 20}),
    userController.sendOtp)

router.post('/',
    body('phone').isLength({min: 5, max: 20}),
    userController.login)

router.delete('/', userController.logout)
router.get('/refresh', userController.refresh)
router.get('/all', authMiddleware, roleMiddleware(userRights.getAll), userController.getAll)

export default router