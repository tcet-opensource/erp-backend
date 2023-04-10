const express = require("express");
const authenticateToken = require("../middleware/auth");
const { asyncPlaceholders } = require("../util");
const router = express.Router();
const userController = require("../controller/user");

router.post("/add", userController.addUser);

module.exports = router;
