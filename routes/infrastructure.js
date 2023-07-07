import express from "express";
import infrastructureController from "#controller/infrastructure";

const router = express.Router();
router.post("/add",infrastructureController.addinfrastructure)
router.post("/update",infrastructureController.updateInfrastructure);
export default router;
