const jwt = require('jsonwebtoken')

async function verifyUser(req, res, next) {

    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            message: "Token not provided"

        })
    }
    let decoded = null
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message: "user is not authorized",
            error: error.message
        })

    }
    req.user = decoded
    next()
}
module.exports = verifyUser