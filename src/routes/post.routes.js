const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controler");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const verifyUser = require("../middleware/auth.middleware");
const asyncHandler = require("../utils/asynhandler");

/**
 * @route POST /api/posts/create
 * @description Create a new post
 * @access Private
 */
postRouter.post(
  "/create",
  upload.single("image"),
  verifyUser,
  asyncHandler(postController.createPostController)
);

/**
 * @route GET /api/posts/getPoste
 * @description Get all posts
 * @access Private
 */
postRouter.get(
  "/getPoste",
  verifyUser,
  asyncHandler(postController.getPostController)
);

/**
 * @route GET /api/posts/details/:postId
 * @description Get post details by post ID
 * @access Private
 */
postRouter.get(
  "/details/:postId",
  verifyUser,
  asyncHandler(postController.getUserDetailsController)
);

module.exports = postRouter;
