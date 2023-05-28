import express from "express";
import authController from "#controller/auth";
import middleware from "#middleware/auth";

const router = express.Router();
router.post("/", authController.login);
router.post("/validateUser", middleware.authenticateToken, authController.validateUser);
router.post("/sendOTP", authController.sendOTP);
router.post("/resetPassword", authController.resetPassword);

export default router;
