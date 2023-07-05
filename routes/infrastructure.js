import express from "express";
import infrastructureController from "#controller/infrastructure";

const router = express.Router();
router.post("/add", infrastructureController.addinfrastructure);
router.post("/delete/:documentID", infrastructureController.deleteinfrastructure);

export default router;
