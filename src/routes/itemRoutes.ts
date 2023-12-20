import express from "express";
import { validate } from "../validation";
import { createVenueSchema, IdOnlySchema } from "../models/generalModel";
import itemsController from "../controllers/itemsController";
import {isAuthed, isAuthedFusion} from "../services/auth";
const router = express.Router();


router.get("/", validate(IdOnlySchema), itemsController.getItem);
router.post("/", validate(createVenueSchema), itemsController.postItem);
router.delete("/", validate(IdOnlySchema), itemsController.deleteItem);
router.put("/", validate(createVenueSchema), itemsController.updateItem);

router.get("/all", isAuthedFusion, itemsController.getItems);

export default router;
