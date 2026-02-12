const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "username is already taken"],
        required: [true, "username is mandatory"]
    },
    email: {
        type: String,
        unique: [true, "email is already in our record"],
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    bio: String,
    profile_pic: {
        type: String,
        default: "https://ik.imagekit.io/se7odunboq/8a14fefc276ab576e8ceac207cace638.webp"
    }


}, { timestamps: true })
const userModel = mongoose.model("user's", userSchema)

module.exports = userModel