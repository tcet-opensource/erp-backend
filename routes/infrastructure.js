import express from "express";
import infrastructureController from "#controller/infrastructure";

const router = express.Router();
router.post("/add", infrastructureController.addinfrastructure);

export default router;
