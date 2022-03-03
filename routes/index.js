import {Router} from 'express';
import authRouter from './authRouter.js';
import profileRouter from './profileRouter.js';
import profileTypeRouter from './profileTypeRouter.js';
import roleRouter from './roleRouter.js';
import authMiddleware from '../middlewares/AuthHandler.js';
import ticketRouter from './ticketRouter.js';

const router = new Router()

router.use('/auth', authRouter)
router.use('/profile', authMiddleware, profileRouter)
router.use('/ticket', authMiddleware, ticketRouter)
router.use('/profile-type', profileTypeRouter)
router.use('/role', roleRouter)

export default router