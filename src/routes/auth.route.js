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
authRoute.post(
  "/login",
  verifyUser,
  asyncHandler(authController.loginController)
);

/**
 * @route GET /api/auth/profile
 *
 */

authRoute.get(
  "/profile",
  verifyUser,
  asyncHandler(authController.getProfileController)
);

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

/**
 * @route POST /api/auth/refresh_refreshToken
 * @description Refresh access token using refresh token
 * @access Private
 */

authRoute.post("/refresh_refreshToken", authController.handleRefreshToken);

/**
 * @route GET /api/auth/profileDet:username
 * @description Get user profile details by username
 * @access Private
 */
authRoute.get(
  "/profileDet/:username",
  verifyUser,
  asyncHandler(authController.userProfileController)
);
module.exports = authRoute;
