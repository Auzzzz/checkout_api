import express from "express";
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import groupItemsController from "../controllers/groupXController/groupItemsController";
import groupVenuesController from "../controllers/groupXController/groupVenuesController";
const router = express.Router();


// Group Items

router.get("/inGroup", validate(IdOnlySchema), groupItemsController.getItemsinGroup);
router.get("/forGroup", validate(IdOnlySchema), groupItemsController.getGroupsforItem);
router.post("/", validate(createVenueSchema), groupItemsController.addItemToGroup);
router.delete("/", validate(IdOnlySchema), groupItemsController.removeItemfromGroup);


// Group Venues

router.get("/inGroup", validate(IdOnlySchema), groupVenuesController.getVenuesinGroup);
router.get("/forGroup", validate(IdOnlySchema), groupVenuesController.getGroupsforVenue);
router.post("/", validate(createVenueSchema), groupVenuesController.addVenueToGroup);
router.delete("/", validate(IdOnlySchema), groupVenuesController.removeVenuefromGroup);


export default router;
