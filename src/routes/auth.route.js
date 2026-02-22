const express = require("express");
const authRoute = express.Router();
const authController = require("../controllers/auth.controler");
const asyncHandler = require("../utils/asynhandler");
const verifyUser = require("../middleware/auth.middleware");

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

/**
 * @route GET /api/auth/logout
 * @description Logout a user
 * @access Private
 */

authRoute.get(
  "/logout",
  verifyUser,
  asyncHandler(authController.logoutController)
);
module.exports = authRoute;
