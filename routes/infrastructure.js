import express from "express";
import infrastructureController from "#controller/infrastructure";

const router = express.Router();
router.post("/add", infrastructureController.addinfrastructure);
router.post("/delete/:infrastructureId", infrastructureController.deleteInfrastructure);

export default router;
