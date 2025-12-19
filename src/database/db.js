import mongoose from "mongoose"

async function connectDatabase() {
    await mongoose.connect("mongodb+srv://brenofreitast:bft-16079719@cluster0.4815e.mongodb.net/?appName=Cluster0")   // mongoose é uma Promisse

}

export default connectDatabase