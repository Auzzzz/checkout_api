import express from "express";
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import groupItemsController from "../controllers/groupXController/groupItemsController";
import groupVenuesController from "../controllers/groupXController/groupVenuesController";

const { authCheck } = require("../services/authCheck");
const { authCheckFusion } = require("../services/authCheckFusion");
const router = express.Router();


// Group Items

router.get("/inGroup", authCheck, validate(IdOnlySchema), groupItemsController.getItemsinGroup);
router.get("/forGroup", authCheck, validate(IdOnlySchema), groupItemsController.getGroupsforItem);
router.post("/", authCheck, validate(createVenueSchema), groupItemsController.addItemToGroup);
router.delete("/", authCheck, validate(IdOnlySchema), groupItemsController.removeItemfromGroup);


// Group Venues

router.get("/inGroup", authCheck, validate(IdOnlySchema), groupVenuesController.getVenuesinGroup);
router.get("/forGroup", authCheck, validate(IdOnlySchema), groupVenuesController.getGroupsforVenue);
router.post("/", authCheck, validate(createVenueSchema), groupVenuesController.addVenueToGroup);
router.delete("/", authCheck, validate(IdOnlySchema), groupVenuesController.removeVenuefromGroup);


export default router;
