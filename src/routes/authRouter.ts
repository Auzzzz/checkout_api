import express from "express";
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import loginController from "../controllers/loginController";
const router = express.Router();



router.post("/login", loginController.login);
router.post("/refresh", loginController.loginRefresh);
router.post("/logout", loginController.logout);
router.post("/validate", loginController.loginValidate);
// router.post("/register", loginController.register);
// router.post("/reset", loginController.resetPassword);
// router.post("/change", loginController.changePassword);



export default router;
