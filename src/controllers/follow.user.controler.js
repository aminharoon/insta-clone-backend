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

  if (!isFollowed) {
    await followModel.create({
      follower: followerUsername,
      following: followingUsername,
      status: "pending",
    });
    return res.status(201).json(new ApiResponse(201, "follow request sent"));
  }

  if (isFollowed.status == "pending") {
    throw new ApiError(409, "request is already sent ");
  }
  if (isFollowed.status == "accepted") {
    throw new ApiError(409, "you are already following this user");
  }
  if (isFollowed.status == "rejected") {
    isFollowed.status = "pending";
    await isFollowed.save();

    return res
      .status(200)
      .json(new ApiResponse(200, "Follow request sent again"));
  }

  throw new ApiError(500, "Unknown follow status");
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

async function acceptFollowRequestController(req, res) {
  const targetUsername = req.user.username;
  const followerUsername = req.params.username;

  if (targetUsername === followerUsername) {
    throw new ApiError(400, "You can't accept your own request");
  }

  const request = await followModel.findOne({
    follower: followerUsername,
    following: targetUsername,
  });

  if (!request) {
    throw new ApiError(404, "Follow request does't found ");
  }
  if (request.status == "accepted") {
    throw new ApiError(409, "follow request already accepted");
  }
  if (request.status == "rejected") {
    throw new ApiError(401, "Follow request has been rejected");
  }

  request.status = "accepted";
  await request.save();

  return res.status(200).json(new ApiResponse(200, "Follow request accepted"));
}

async function rejectFollowRequestController(req, res) {
  const loggedUsername = req.user.username;
  const targetUsername = req.params.username;

  if (loggedUsername == targetUsername) {
    throw new ApiError(400, "You can't reject your own request");
  }

  const request = await followModel.findOne({
    follower: loggedUsername,
    following: targetUsername,
  });
  if (!request) {
    throw new ApiError(404, "Follow Request Does't found ");
  }

  if (request.status == "accepted") {
    throw new ApiError(409, "Follow request already accept");
  }

  if (request.status == "rejected") {
    throw new ApiError(409, "follow request has been rejected");
  }

  request.status = "rejected";
  await request.save();
  return res
    .status(200)
    .json(new ApiResponse(200, "Follow request has been rejected"));
}

async function listPendingFollowRequestsController(req, res) {
  const targetUsername = req.user.username;

  const requests = await followModel
    .find({ following: targetUsername, status: "pending" })
    .select("follower status createdAt");

  return res
    .status(200)
    .json(new ApiResponse(200, "Pending follow requests", requests));
}
module.exports = {
  followUserController,
  unFollowUserController,
  acceptFollowRequestController,
  rejectFollowRequestController,
  listPendingFollowRequestsController,
};
