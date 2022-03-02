import {Router} from 'express';
import profileTypeController from '../controllers/profileTypeController.js';
import {body} from 'express-validator';
import AsyncErrorHandler from '../middlewares/AsyncErrorHandler.js';
import ValidateHandler from '../middlewares/ValidateHandler.js';
const router = new Router()

router.post(
    '/',
    body('name').not().isEmpty(),
    ValidateHandler,
    AsyncErrorHandler(profileTypeController.create)
)

router.get(
    '/',
    ValidateHandler,
    AsyncErrorHandler(profileTypeController.getAll)
)

router.get(
    '/:id',
    ValidateHandler,
    AsyncErrorHandler(profileTypeController.getOne)
)

export default router