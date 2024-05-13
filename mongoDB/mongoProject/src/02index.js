const mongoose = require("mongoose");
const studentModel = require("../models/student.model02.js")

mongoose.connect("mongodb://localhost/be_database")  //where to connect.
const db = mongoose.connection;  //ordered to connect, return promise 1.success 2.error
db.on("error",()=>{
    console.log("error while connecting to DB")
})
db.once("open",()=>{
    console.log("Connected to mongoDB")
   init()
    readQueries()
})
// init() function
async function init(){
 try{
    student1={
        name:"Govind",
        age:24,
        subject:["math", "science","CS"],
        email:"pqrstuvwxyz@gmail.com"
     } 
     //we create documents by create() and insert it on student model.which return a promise,so use async-await
    const data =await studentModel.create(student1)
    console.log(data);
 }catch(err){
    console.log(err);
 }
}

//readQueries() function
async function readQueries(){
    try{
        const data = await studentModel.find({name:"Govind"})
    console.log(data);
    }catch(err){
        console.log(err);
    }
    
}
console.log(typeof mongoose);