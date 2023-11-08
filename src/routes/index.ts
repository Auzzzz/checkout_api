import express from 'express'
import testRoutes from './testRoutes'
import venueRoutes from './venueRoutes'

const router = express.Router()

router.use('/test', testRoutes)

router.use('/v1/venue', venueRoutes)

export default router