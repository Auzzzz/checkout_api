import express from 'express'
import testController from '../controllers/testController'
import { validate } from '../validation'
import { testSchema } from '../models/test'




const router = express.Router()


router.get('/', testController.getHello)
// router.post('/',validate(testSchema), testController.postTest)


// Fusion Test

router.get('/fusion', testController.fusionHello)
router.post('/fusion/panic', testController.fusionPanic)
router.get('/fusiontest', testController.fusionTest)
router.get('/fusionLoginTest', testController.fusionLoginTest)
// router.get('/fusionRefreshToken', testController.fusionRefreshToken)
router.get('/fusionApplication', testController.fusionGetApplication)
router.get('/fusionLoginValidate', testController.fusionValidateToken)
export default router