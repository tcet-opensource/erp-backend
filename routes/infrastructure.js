import express from "express";
import infrastructureController from "#controller/infrastructure";

const router = express.Router();
router.post("/add", infrastructureController.addinfrastructure);
router.get("/list",infrastructureController.getinfrastructure);

export default router;
