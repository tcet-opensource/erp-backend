import express from "express";
import infrastructureController from "#controller/infrastructure";

const router = express.Router();
router.post("/add",infrastructureController.addinfrastructure)
router.post("/update",infrastructureController.updateinfrastructure);
export default router;
