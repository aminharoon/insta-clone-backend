const express = require("express");
const userController = require("../controllers/user.controler");
const verifyUser = require("../middleware/auth.middleware");

const userRouter = express.Router();
/**
 * @route POST /api/users/follow/some user's id
 * @description Follow a user
 * @access Private
 *  */

userRouter.post(
  "/follow/:username",
  verifyUser,
  userController.followUserController
);

module.exports = userRouter;
