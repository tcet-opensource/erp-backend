import express from "express";
import {default as authController} from "#controller/auth";
import {default as middleware} from "#middleware/auth";

const router = express.Router();
router.post("/", authController.login);
router.post("/validateUser", middleware.authenticateToken, authController.validateUser);
router.post("/sendOTP", authController.sendOTP);
router.post("/resetPassword", authController.resetPassword);

export default router;
