import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import connectDb from './config/connectDb.js'
const app=express()
app.use(cors({ //cors middleware
    credentials:true, 
    origin:process.env.FRONTEND_URL
}))
app.use(express.json()) // for req in form of json
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy:false
}))
const PORT =3001 || process.env.PORT
app.get("/",(req,res)=>{
    res.json({
        message:"server is running"
    })
})
connectDb().then(()=>{ //first connects and starts server
    app.listen(PORT,()=>{
        console.log("server is running", PORT)
    })
});
