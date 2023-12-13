import express from "express";
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import loginController from "../controllers/auth/loginController";
import regController from '../controllers/auth/regController'
const router = express.Router();



router.post("/login", loginController.login);
router.post("/refresh", loginController.loginRefresh);
router.post("/logout", loginController.logout);
router.post("/validate", loginController.loginValidate);
router.post("/register", regController.register);
//TODO: Add reset and change password
// router.post("/reset", loginController.resetPassword);
// router.post("/change", loginController.changePassword);



export default router;