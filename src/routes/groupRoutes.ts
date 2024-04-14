import express from "express";
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import groupController from "../controllers/groupController";
const { authCheckFusion } = require("../services/authCheckFusion");
const router = express.Router();

router.get("/", validate(IdOnlySchema), groupController.getGroup);
router.post("/", validate(createVenueSchema), groupController.createGroup);
router.delete("/", validate(IdOnlySchema), groupController.deleteGroup);
router.put("/", validate(createVenueSchema), groupController.updateGroup);


router.get("/all/f", authCheckFusion, groupController.getGroups);

export default router;
