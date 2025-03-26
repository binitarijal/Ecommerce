import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGODB_CS){
    throw new Error(
        "please provide Mongodb cs"
    )
}
async function connectDb(){
    try{
await mongoose.connect(process.env.MONGODB_CS)
console.log("conneced db")
    }
    catch(error){
        console.log("Mongodb connection error", error)
        process.exit(1) // it stops server
    }
}
export default connectDb