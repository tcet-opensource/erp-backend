import express from "express";
import accreditationController from "#controller/accreditation";

const router = express.Router();
router.get("/list:filter", accreditationController.showAccreditation);
router.post("/add", accreditationController.addAccreditation);
export default router;