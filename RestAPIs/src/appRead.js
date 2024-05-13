const express =require("express")
const studentReg = require("../models/studentModel")
require("../connection/conn")
 
const port = process.env.Port || 16123
const app = express()
app.use(express.json())

app.get("/students/:id",async (req,res)=>{
    try{
        const _id = req.params.id
    const data = await studentReg.findById({_id:_id})
    if(!data){
        res.status(404).send()
    }else{
        res.send(data)
    }
    
    }catch(err){
        res.send(err)
    }
})

app.listen(port,()=>{
    console.log(`server running on port no. ${port}`);
})
