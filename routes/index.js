import {Router} from 'express';
import userRouter from './userRouter.js';
import profileRouter from './profileRouter.js';
import profileTypeRouter from './profileTypeRouter.js';
import roleRouter from './roleRouter.js';
import authMiddleware from '../middlewares/AuthHandler.js';
import ticketRouter from './ticketRouter.js';

const router = new Router()

router.use('/user', userRouter)
router.use('/profile', authMiddleware, profileRouter)
router.use('/ticket', authMiddleware, ticketRouter)
router.use('/profile-type', profileTypeRouter)
router.use('/role', roleRouter)

export default router