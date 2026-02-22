const { Accounts } = require("@imagekit/nodejs/resources");
const userModel = require("../models/user.model");
const ApiError = require("../utils/apiError");
const ApiResponse = require("../utils/apiresponse");

async function generateAccessTokenAndRefreshToken(userID) {
  try {
    const user = await userModel.findById(userID);
    const AccessToken = await user.generateAccessToken();
    const RefreshToken = await user.generateRefreshToken();

    user.refreshToken = RefreshToken;

    await user.save({ validateBeforeSave: false });

    return { AccessToken, RefreshToken };
  } catch (error) {
    throw new ApiError(500, "something went wrong there  " + error.message);
  }
}
async function registerController(req, res) {
  let { username, email, password, bio, profile_pic } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { password }],
  });
  if (isUserAlreadyExists) {
    throw new ApiError(401, "user already exits");
  }

  const user = await userModel.create({
    username,
    email,
    password,
    bio,
    profile_pic,
  });

  const isUserPresent = await userModel.findById(user._id).select("-password");
  return res
    .status(201)
    .json(new ApiResponse(201, "user created ", isUserPresent));
}

async function loginController(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (!user) {
    throw new ApiError(404, `Invalid ${email ? "email" : "Username"}`);
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(409, "Invalid Password");
  }

  const { AccessToken, RefreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);

  const loggedUser = await userModel
    .findById(user._id)
    .select("-password -refreshToken");

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("AccessToken", AccessToken, options)
    .cookie("RefreshToken", RefreshToken, options)
    .json(
      new ApiResponse(200, "User logged In Successfully", {
        user: loggedUser,
        AccessToken,
        RefreshToken,
      })
    );
}

async function logoutController(req, res) {
  await userModel.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },

    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("AccessToken", options)
    .clearCookie("RefreshToken", options)
    .json(new ApiResponse(200, "logged out successfully", {}));
}

module.exports = {
  registerController,
  loginController,
  logoutController,
};
