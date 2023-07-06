import express from "express";
import accreditationController from "#controller/accreditation";

const router = express.Router();
router.post("/add", accreditationController.addAccreditation);
export default router;
