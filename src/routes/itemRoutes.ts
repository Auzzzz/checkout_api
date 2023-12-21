import express from "express";
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import itemsController from "../controllers/itemsController";
// import {isAuthed, isAuthedFusion} from "../services/auth";
 const { authCheck } = require("../services/authCheck");
const { authCheckFusion } = require("../services/authCheckFusion");
const router = express.Router();


router.get("/", validate(IdOnlySchema), itemsController.getItem);
router.post("/", validate(createVenueSchema), itemsController.postItem);
router.delete("/", validate(IdOnlySchema), itemsController.deleteItem);
router.put("/", validate(createVenueSchema), itemsController.updateItem);

router.get("/all", authCheck, itemsController.getItems);
router.get("/all/f", authCheckFusion, itemsController.getItems);
export default router;
