import express from "express";
// import testController from '../controllers/testController'
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import venueController from "../controllers/venueController";

const { authCheck } = require("../services/authCheck");
const { authCheckFusion } = require("../services/authCheckFusion");

const router = express.Router();

// router.get('/', testController.getHello)
// router.post('/',validate(testSchema), testController.postTest)

router.get("/:id", venueController.getVenue);
router.post("/", authCheck, validate(createVenueSchema), venueController.postVenue);
router.delete("/", authCheck, validate(IdOnlySchema), venueController.deleteVenue);
router.put("/", authCheck, validate(createVenueSchema), venueController.updateVenue);

router.get("/all", venueController.getVenues);

router.get("/all", authCheckFusion, venueController.getVenues);

export default router;
