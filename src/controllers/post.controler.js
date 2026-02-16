const postModel = require("../models/post.model")
const imageKit = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")



const ImageKit = new imageKit({
    privateKey: process.env.IMAGE_KET_KEY
})

/** create post  */
async function createPostController(req, res) {
    try {

        //get the token from the cookies 

        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({
                message: "Token not provided"
            })
        }
        let decoded;

        try {
            // verify the token 
            decoded = jwt.verify(token, process.env.JWT_SECRET)
        } catch (error) {
            return res.status(401).json({
                message: "Invalid token",
                error: error.message
            })
        }



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
            user: decoded.id
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

module.exports = { createPostController } 