const express= require("express")
require("../connection/conn")
const dataSchema = require("../models/studentModel")
const app = express()

const port = process.env.Port || 16123
// update by id
app.use(express.json())
app.patch("/students/:id",async(req, res)=>{
    try{
        const id =req.params.id
    const updateStudent= await dataSchema.findByIdAndUpdate({_id:id},req.body,{new:true})
    console.log(req.body);
    console.log(updateStudent);
    if(!updateStudent){
        res.status(400).send(error)
    }else{
        res.send(updateStudent)
    }
    }catch(e){
        res.status(500).send(e)
    }
})

app.listen(port, ()=>{
    console.log(`server is running on port no. ${port}`);
})