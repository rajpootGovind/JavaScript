/**1. we create a connection between our code and db(local database).
 * 2. B.E. is created in three diffrent layer, so we created a model folder which will interact with DB.
 * and with the help of model() function we create Collection and define the type of schema(structure of documents)-
 * -collection will accept.
 * 3. we imports model to our code(app). we create documents with the help of create() and insert it on model.
 * create() return a promise so we use async await with try catch.
 * this will happen if connection stablish successfully the database.
*/

const mongoose = require("mongoose");
const studentModel = require("../models/student.model.js")

mongoose.connect("mongodb://localhost/be_database")  //where to connect.
const db = mongoose.connection;  //ordered to connect, return promise 1.success 2.error
db.on("error",()=>{
    console.log("error while connecting to DB")
})
db.once("open",()=>{
    console.log("Connected to mongoDB")
   // init()
   //deleteQueries()

   updateQueries()
})

async function init(){
 try{
    student1={
        name:"Govind",
        age:24
     } 
    student2={
        name:"Birju",
        age:25
     } 
     //we create documents by create() and insert it on student model.return a promise,so use async-await
    const data =await studentModel.create([student1,student2])
    console.log(data);
 }catch(err){
    console.log(err);
 }
}
console.log(typeof mongoose);

// const deleteQueries=async ()=>{
//    const data = await studentModel.deleteMany({name:"Govind"},{name:"Govind"},{name:"Govind"})
//    console.log(data);
// }

const updateQueries= async()=>{
   try{
    const data =await studentModel.updateMany({name:"Arpit"},{$set:{name:"Birju"}})
   console.log(data);
   }catch(err){
      console.log(err);
   }
}
