const userModel = require("../models/user.model");
const ApiError = require("../utils/apiError");

const jwt = require("jsonwebtoken");

/**
 *
 * @param {*} req
 * @param {*} res
 */

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

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  res.cookie("token", token);
  const isUserPresent = await userModel.findById(user._id).select("-password");
  res.status(201).json({
    message: "user is Created ",
    user: isUserPresent,
  });
}

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
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

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "2d",
    }
  );
  res.cookie("token", token);
  const isUserPresent = await userModel.findById(user._id).select("-password");
  res.status(200).json({
    message: "Login Successfully ",
    user: isUserPresent,
  });
}

module.exports = {
  registerController,
  loginController,
};
