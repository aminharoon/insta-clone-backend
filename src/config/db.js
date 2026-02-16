const mongoose = require("mongoose")
const DB_NAME = require("../constants")

const connectDB = async () => {
    try {
        const responce = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        console.log(`connected to DB `)

    } catch (error) {
        console.log(error.message)

    }

}


module.exports = connectDB