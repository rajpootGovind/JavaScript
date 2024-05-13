const express= require("express")
const studentReg = require("../models/studentModel")
require("../connection/conn")

const port = process.env.Port || 16123

const app =  express();
app.use(express.json())

app.post("/students",async(req,res)=>{
    try{
        const studentData = studentReg(req.body)
    const user =await studentData.save()// return promise, use async await
    console.log(user);
           res.send("student registration")
    }catch(err){
        res.send(err)
    }
})

app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})