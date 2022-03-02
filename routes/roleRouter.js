import {Router} from 'express';
import roleController from '../controllers/roleController.js';
import AsyncErrorHandler from '../middlewares/AsyncErrorHandler.js';
import ValidateHandler from '../middlewares/ValidateHandler.js';

const router = new Router()

router.post(
    '/',
    ValidateHandler,
    AsyncErrorHandler(roleController.create)
)
router.get(
    '/',
    ValidateHandler,
    AsyncErrorHandler(roleController.getAll)
)
router.get(
    '/:id',
    ValidateHandler,
    AsyncErrorHandler(roleController.getOne)
)

export default router