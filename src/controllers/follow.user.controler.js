const { APIResource } = require("@imagekit/nodejs/resource.js");
const followModel = require("../models/follow.model");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiresponse");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  const followerUsername = req.user.username;

  const followingUsername = req.params.username;

  /**
   * if the user does't exist in the database, throw an error
   */
  const IsUserExists = await userModel.findOne({ username: followingUsername });
  if (!IsUserExists) {
    throw new ApiError(404, "User does not exist");
  }
  /**
   * Check if the user is trying to follow themselves
   */
  if (followerUsername === followingUsername) {
    throw new ApiError(409, "You can't follow your self");
  }
  /**
   * Check if the user is already following the target user
   */
  const isFollowed = await followModel.findOne({
    follower: followerUsername,
    following: followingUsername,
  });

  if (isFollowed) {
    throw new ApiError(
      409,
      `${followerUsername} is already following ${followingUsername}.`
    );
  }

  await followModel.create({
    follower: followerUsername,
    following: followingUsername,
  });

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        `${followerUsername} is following now ${followingUsername}`
      )
    );
}

async function unFollowUserController(req, res) {
  const followerUsername = req.user.username;
  const followingUsername = req.params.username;

  if (followerUsername == followingUsername) {
    throw new ApiError(400, "You't unfollow you self");
  }

  const user = await userModel.findOne({ username: followingUsername });
  if (!user) {
    throw new ApiError(404, "username dos't exits");
  }

  const isFollowed = await followModel.findOne({
    follower: followerUsername,
    following: followingUsername,
  });
  if (!isFollowed) {
    throw new ApiError(400, `You are not following ${followingUsername}`);
  }

  await followModel.findByIdAndDelete(isFollowed._id);
  res
    .status(200)
    .json(new ApiResponse(200, `You have unfollow the ${followingUsername}`));
}
module.exports = {
  followUserController,
  unFollowUserController,
};
