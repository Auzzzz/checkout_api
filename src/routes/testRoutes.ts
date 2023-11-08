import express from 'express'
import testController from '../controllers/testController'
import { validate } from '../validation'

const router = express.Router()
import { testSchema } from '../models/test'


router.get('/', testController.getHello)
router.post('/',validate(testSchema), testController.postTest)

export default router