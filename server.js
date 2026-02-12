require('dotenv').config()
const app = require("./src/app")
const connectToDataBase = require("./src/config/db")


connectToDataBase()
app.listen(3000, () => {
    console.log("Server is running at port 3000")
})