const postModel = require("../models/post.model")
const imageKit = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")



const ImageKit = new imageKit({
    privateKey: process.env.IMAGE_KET_KEY
})

/** create post  */
async function createPostController(req, res) {
    try {
        console.log(req.user)

        /** upload an image to the image kit  */
        const file = await ImageKit.files.upload({
            file: await imageKit.toFile(Buffer.from(req.file.buffer), "file"),
            fileName: "test",
            folder: "inst-clone-posts"
        })



        /**create an post  */
        const post = await postModel.create({
            caption: req.body.caption,
            image_url: file.url,
            user: req.user.id
        })
        res.status(201).json({
            message: "post is created successfully ",
            post
        })

    } catch (error) {
        console.log("error while uploading an image to backend ", error.message)

        res.send(error.message)

    }
}

/**get the posts  */
async function getPostController(req, res) {
    try {
        //verify the user
        const userId = req.user.id;
        const post = await postModel.find({
            user: userId
        })
        res.status(200).json({
            message: "successfully fetch the post  ",
            post
        })



    } catch (error) {
        return res.status().json({
            message: "there is an error",
            error: error.message
        })
    }
}


/**get the post details about specific post with the id  and also check the weather the post belongs to the user that the req come from  */

async function getUserDetailsController(req, res) {
    try {

        const userId = req.user.id;
        const postId = req.params.postId

        const post = await postModel.findById(postId)
        if (!post) {
            return res.status(404).json({
                message: "404 POST NOT FOUND"
            })
        }

        const isValidUser = post.user.toString() === userId
        if (!isValidUser) {
            return res.status(403).json({
                message: "forbidden content"

            })
        }

        return res.status(200).json({
            message: "post fetched successfully",
            post
        })
    } catch (error) {
        return res.status(500).json({
            message: "there is an error",
            error: error.message
        })

    }



}


module.exports = { createPostController, getPostController, getUserDetailsController } 