const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
