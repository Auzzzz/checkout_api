import express from "express";
// import testController from '../controllers/testController'
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import venueController from "../controllers/venueController";
const { authCheckFusion } = require("../services/authCheckFusion");

const router = express.Router();

// router.get('/', testController.getHello)
// router.post('/',validate(testSchema), testController.postTest)

router.get("/", validate(IdOnlySchema), venueController.getVenue);
router.post("/", validate(createVenueSchema), venueController.postVenue);
router.delete("/", validate(IdOnlySchema), venueController.deleteVenue);
router.put("/", validate(createVenueSchema), venueController.updateVenue);

router.get("/all", venueController.getVenues);

router.get("/all/f", authCheckFusion, venueController.getVenues);

export default router;
