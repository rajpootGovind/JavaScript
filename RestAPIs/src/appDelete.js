const express = require("express")
require("../connection/conn")
const studentSchema = require("../models/studentModel")

const app = express();
const port = process.env.Port || 16123

app.use(express.json())

app.delete("/students/:id", async(req,res)=>{
   try {
    const deletedStudent = await studentSchema.findByIdAndDelete(req.params.id)
    if(!deletedStudent){
        res.status(400).send(error)
    }else{
        res.send(deletedStudent)
        console.log(deletedStudent);
    }
  
   } catch (error) {
    res.send(error)
   }

})

app.listen(port, ()=>{
    console.log(`Our server is running on port no. ${port}`);
})