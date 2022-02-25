import {Router} from "express";
import profileController from "../controllers/profileController.js";
const router = new Router()

router.post('/', profileController.create)
router.get('/', profileController.getAll)
router.get('/:id', profileController.getOne)

export default router