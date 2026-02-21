const express = require("express");
const authRoute = express.Router();
const authController = require("../controllers/auth.controler");
const asyncHandler = require("../utils/asynhandler");

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRoute.post("/register", asyncHandler(authController.registerController));

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public
 */
authRoute.post("/login", asyncHandler(authController.loginController));
module.exports = authRoute;
