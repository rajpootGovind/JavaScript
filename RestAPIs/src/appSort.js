const express =require("express")
const studentReg = require("../models/studentModel")
require("../connection/conn")
 
const port = process.env.Port || 16123
const app = express()
app.use(express.json())

app.get("/students",async (req,res)=>{
    try{
    const data = await studentReg.find().sort({age:1})
    
        res.send(data)
    
    }catch(err){
        res.status(400).send(err)
    }
})

app.listen(port,()=>{
    console.log(`server running on port no. ${port}`);
})
