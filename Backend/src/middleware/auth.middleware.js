const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");
/** * Middleware to verify the user's authentication status
 */

async function verifyUser(req, res, next) {
  try {
    const token = req.cookies.AccessToken;
    if (!token) {
      throw new ApiError(401, "Access Token Is Needed ");
    }
    let decoded = null;
    try {
      decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
    } catch (error) {
      throw new ApiError(401, error.message);
    }
    req.user = decoded;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
}
module.exports = verifyUser;
