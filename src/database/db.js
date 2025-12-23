import 'dotenv/config'
import mongoose from "mongoose"
const connectMongo = process.env.connectMongo

async function connectDatabase() {
    await mongoose.connect(connectMongo)   // mongoose é uma Promisse

}

export default connectDatabase