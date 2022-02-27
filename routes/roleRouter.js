import {Router} from "express";
import roleController from "../controllers/roleController.js";
const router = new Router()

router.post('/', roleController.create)
router.get('/', roleController.getAll)
router.get('/:id', roleController.getOne)

export default router