import express from 'express'
import testRoutes from './testRoutes'
import venueRoutes from './venueRoutes'
import itemRoutes from './itemRoutes'
import groupRoutes from './groupRoutes'
import authRouter from './authRouter'
import groupXRouter from './groupXRoutes'
import departmentRouter from './departmentRoutes'
const router = express.Router()

router.use('/test', testRoutes)

router.use('/v1/venue', venueRoutes)
router.use('/v1/item', itemRoutes)
router.use('/v1/group', groupRoutes)
router.use('/v1/groups', groupXRouter)
router.use('/v1/auth', authRouter)
router.use('/v1/department', departmentRouter)

export default router