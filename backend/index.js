// const express = require('express') -- old way of creating server
import express from "express";
import cookieParser  from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
dotenv.config({});


const app = express();

app.get("/home",(req,res)=>{
    return res.status(200).json({
        message: "I am coming from backend",
        sucess:true
    })
})

//moddleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions ={
    origin:'https/localhost:5173',
    credentials: true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


//API

app.use("/app/v1/user", userRoute);



app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server Running at Port ${PORT}`);
})
