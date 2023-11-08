import express from "express";
// import testController from '../controllers/testController'
import { validate } from "../validation";
import { createVenueSchema, venueIDSchema } from "../models/venuesModel";
import venueController from "../controllers/venueController";
const router = express.Router();

// router.get('/', testController.getHello)
// router.post('/',validate(testSchema), testController.postTest)

router.get("/", validate(venueIDSchema), venueController.getVenue);
router.post("/", validate(createVenueSchema), venueController.postVenues);
router.delete("/", validate(venueIDSchema), venueController.deleteVenue);
router.put("/", validate(createVenueSchema), venueController.updateVenue);

router.get("/all", venueController.getVenues);

export default router;
