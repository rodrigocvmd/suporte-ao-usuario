const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const conn = await mongoose.connect()
    } catch (error) {
        
    }
}