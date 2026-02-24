require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("server is running at port ", process.env.PORT || 3000);
    });
  })
  .catch((err) => {
    console.log("Something Went Wrong ", err.message);
  });
