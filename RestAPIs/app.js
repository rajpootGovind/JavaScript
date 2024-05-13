const express = require("express")
// import the conection file
require("./connection/conn")
const StudentModel = require("./models/studentModel")
console.log(StudentModel);

const port = process.env.PORT || 1200

const app = express()
// for showing on browser
// app.get("/",(req, res)=>{
//     res.send("Welcome to my Homepage");
// })
app.use(express.json())
/**
 * create an Request API
//  */
// app.post("/students",(req, res)=>{
// //console.log(req.body);
// const user =new  StudentModel(req.body)
//  console.log(user);
//  user.save().then(()=>{
//     res.status(201).send(user);
//  }).catch((e)=>{
//     res.status(400).send(e);
//  })
    
// })

app.post("/students",async(req, res)=>{
try{
    const user =  StudentModel(req.body)
    const createUser= await user.save()
    console.log(user);
    res.status(201).send("student registration completed")
} catch(err){
    res.status(200).send(err)
}   
})

app.listen(port,()=>{
    console.log(`server is running on port no. ${port}`);
})
