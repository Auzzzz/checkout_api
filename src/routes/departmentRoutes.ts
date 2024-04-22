import express from "express";
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import departmentController from "../controllers/departmentController";
 const { authCheck } = require("../services/authCheck");
const { authCheckFusion } = require("../services/authCheckFusion");
const router = express.Router();

router.get("/all", authCheckFusion, departmentController.getDepartments);

// router.get("/", authCheck, validate(IdOnlySchema), itemsController.getItem);
router.post("/", authCheck, validate(createVenueSchema), departmentController.postDepartment);
router.delete("/", authCheck,  validate(IdOnlySchema), departmentController.deleteDepartment);
router.put("/", authCheck, validate(createVenueSchema), departmentController.updateDepartment);
router.get("/:id", departmentController.getDepartment);

router.get("/all/f", authCheckFusion, departmentController.getDepartments);
export default router;
