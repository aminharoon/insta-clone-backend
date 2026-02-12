const mongoose = require("mongoose")

async function connectToDataBase() {
    const res = await mongoose.connect(process.env.DATABASE_URL)
    console.log("connected to data base ")
}


module.exports = connectToDataBase