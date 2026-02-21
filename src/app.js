const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

/**required routes  */
const authRoute = require("../src/routes/auth.route");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.route");

/**using routes  */
app.use("/api/auth", authRoute);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Server error",
  });
});
module.exports = app;
