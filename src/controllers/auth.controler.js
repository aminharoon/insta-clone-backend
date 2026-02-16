const userModel = require("../models/user.model")

const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")



/**registration api  */
async function registerController(req, res) {
    try {
        let { username, email, password, bio, profile_pic } = req.body;


        const isUserAlreadyExists = await userModel.findOne({ $or: [{ username }, { password }] })
        if (isUserAlreadyExists) {
            throw new Error("User already exists" + isUserAlreadyExists.email == email ? "email already exists" : "username already exists");
        }


        const hash = await bcrypt.hash(password, 10)

        const user = await userModel.create({ username, email, password: hash, bio, profile_pic })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
        res.cookie("token", token)
        res.status(201).json({
            message: "user is Created ",
            user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profile_pic: user.profile_pic

            }
        })
    } catch (error) {
        res.status(409).json({
            error: error.message
        })

    }

}
/**login api */
async function loginController(req, res) {

    try {
        const { username, email, password } = req.body

        const user = await userModel.findOne({
            $or: [{ username: username }, { email: email }]
        })

        if (!user) {
            return res.status(404).json({
                message: `Invalid ${email ? 'email' : 'username'}`
            })
        }



        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(409).json({
                message: "Invalid password"
            })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "2d" })
        res.cookie("token", token)
        res.status(200).json({
            message: "Login Successfully ",
            user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profile_pic: user.profile_pic
            }
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }


}

module.exports = {
    registerController,
    loginController

}