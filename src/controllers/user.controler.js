const followModel = require("../models/follow.model");
const ApiError = require("../utils/apiError");

async function followUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  // if (followeeUsername == followeeUsername) {
  //   return res.status(400).json({
  //     message: "You can't follow your self ",
  //   });
  // }
  const isAlreadyFollowed = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });
  if (isAlreadyFollowed) {
    throw new ApiError(409, "ALready in the following list ");
    // return res.status(409).json({
    //   message: "Already in the following list ",
    //   follow: isAlreadyFollowed,
    // });
  }
  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  res.status(201).json({
    message: `${followerUsername} are now following ${followeeUsername}`,
    follow: followRecord,
  });
}
module.exports = {
  followUserController,
};
