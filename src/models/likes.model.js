const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: [true, "username is required for like the posts"],
    },
    user: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "posts",
      type: String,
      required: [true, "user is required for giving the like to the post "],
    },
  },
  { timestamps: true }
);

likeSchema.index(
  {
    post: 1,
    user: 1,
  },
  {
    unique: true,
  }
);

const likeModel = mongoose.model("like", likeSchema);

module.exports = likeModel;
