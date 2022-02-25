import {Router} from "express";
import profileTypeController from "../controllers/profileTypeController.js";
const router = new Router()

router.post('/', profileTypeController.create)
router.get('/', profileTypeController.getAll)
router.get('/:id', profileTypeController.getOne)

export default router