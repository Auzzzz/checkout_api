import express from "express";
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import groupController from "../controllers/groupController";

const { authCheck } = require("../services/authCheck");
const { authCheckFusion } = require("../services/authCheckFusion");

const router = express.Router();

router.get("/", authCheck, validate(IdOnlySchema), groupController.getGroup);
router.post("/",authCheck, validate(createVenueSchema), groupController.createGroup);
router.delete("/", authCheck, validate(IdOnlySchema), groupController.deleteGroup);
router.put("/", authCheck, validate(createVenueSchema), groupController.updateGroup);

router.get("/all", authCheckFusion, groupController.getGroups);
router.get("/:id", groupController.getGroup);

export default router;
