const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    image_url: {
        type: String,
        require: [true, "img url is require for created post "]
    },
    user: {
        ref: "users",
        type: mongoose.Schema.Types.ObjectId,
        require: [true, "user id  is required for creating post "]
    }


})
const postModel = mongoose.model("posts", postSchema)

module.exports = postModel