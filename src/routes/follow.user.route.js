const express = require("express");
const userController = require("../controllers/follow.user.controler");
const verifyUser = require("../middleware/auth.middleware");
const asyncHandler = require("../utils/asynhandler");

const userRouter = express.Router();
/**
 * @route POST /api/users/follow/:username
 * @description Follow a user
 * @access Private
 */

userRouter.post(
  "/follow/:username",
  verifyUser,
  asyncHandler(userController.followUserController)
);

/**
 * @route POST /api/users/unfollow/:username
 * @description Unfollow a user
 * @access Private
 */
userRouter.post(
  "/unfollow/:username",
  verifyUser,
  asyncHandler(userController.unFollowUserController)
);

module.exports = userRouter;
