const mongoose = require("mongoose");

const followSchema = new mongoose.Schema(
  { follower: String, followee: String },
  { timestamps: true }
);

const followModel = mongoose.model("follows", followSchema);

module.exports = followModel;
