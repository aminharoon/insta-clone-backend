const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controler")
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const verifyUser = require("../middleware/auth.middleware")


/**
 * post {"/api/posts "}- req.body -> caption and image file 
 * and this api is protected ->only those user will send the request on this api which has an valid token 
 */
postRouter.post("/create", upload.single("image"), verifyUser, postController.createPostController)

/**get the all posts that user creates  */
postRouter.get('/getPoste', verifyUser, postController.getPostController)


/**get post details like only the  */
postRouter.get("/details/:postId", verifyUser, postController.getUserDetailsController)




module.exports = postRouter