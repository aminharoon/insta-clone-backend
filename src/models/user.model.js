const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, "username is already taken"],
      required: [true, "username is mandatory"],
      lowerCase: true,
      trim: true,
      set: (value) => value.replace(/\s+/g, ""),
    },
    email: {
      type: String,
      unique: [true, "email is already in our record"],
      required: [true, "email is required"],
      lowerCase: true,
      trim: true,
      set: (value) => value.replace(/\s+/g, ""),
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    bio: String,
    profile_pic: {
      type: String,
      default:
        "https://ik.imagekit.io/se7odunboq/8a14fefc276ab576e8ceac207cace638.webp",
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.JWT_ACCESS_TOKEN,
    { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES }
  );
};

userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.JWT_REFRESH_TOKEN,
    { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES }
  );
};
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
