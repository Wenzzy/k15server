import {Router} from "express";
import userController from "../controllers/userController.js";

const router = new Router()

router.post('/', userController.registration)
router.post('/login', userController.login)
router.delete('/', userController.logout)
router.post('/activate', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/check', userController.check)
router.get('/users', userController.users)

export default router