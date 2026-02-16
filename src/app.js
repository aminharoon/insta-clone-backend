const express = require("express")
const authRoute = require("../src/routes/auth.route")
const cookieParser = require("cookie-parser")
const postRouter = require("./routes/post.routes")
const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRoute)
app.use("/api/posts", postRouter)
module.exports = app