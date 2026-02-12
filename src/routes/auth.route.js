const express = require("express")
const authRoute = express.Router()
const authController = require("../controllers/auth.controler")



/** register api  */
authRoute.post("/register", authController.registerController)

/**login api */
authRoute.post("/login", authController.loginController)
module.exports = authRoute