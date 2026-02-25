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

/**http://localhost:8000/api/users/
 * @route POST /api/users/unfollow/:username
 * @description Unfollow a user
 * @access Private
 */
userRouter.post(
  "/unfollow/:username",
  verifyUser,
  asyncHandler(userController.unFollowUserController)
);

/**
 * @route POST /api/users/follow/:username/accept
 * @description Accept a follow request
 * @access Private
 */
userRouter.post(
  "/follow/:username/accept",
  verifyUser,
  asyncHandler(userController.acceptFollowRequestController)
);

/**
 * @route POST /api/users/follow/:username/reject
 * @description Reject a follow request
 * @access Private
 */
userRouter.post(
  "/follow/:username/reject",
  verifyUser,
  asyncHandler(userController.rejectFollowRequestController)
);

/**
 * @route GET /api/users/follow/requests/pending
 * @description List pending follow requests
 * @access Private
 */
userRouter.get(
  "/follow/requests/pending",
  verifyUser,
  asyncHandler(userController.listPendingFollowRequestsController)
);

module.exports = userRouter;
