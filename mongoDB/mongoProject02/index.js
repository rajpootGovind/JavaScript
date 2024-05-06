const mongoose = require("mongoose")
const employeeModel =require("./models/employee.model")

mongoose.connect("mongodb://localhost/ReadDatabase")

const db = mongoose.connection
db.on("error",(err)=>{
    console.log(err);
})
db.once("open",()=>{
    console.log("connection is stablish with db");
    init()

    readQueries()

   // deleteQueries()
})
//by arrow function
const init = async()=>{
   try{
    const employee={
        name:"Govind",
        id:2345678923,
        age:59,
        city:"Mahoba"
    }

    await employeeModel.create(employee)  //async process so we wanna to wait
    //documents created and inserted in collection
   }catch(err){
    console.log(err);
   }
}


const readQueries= async ()=>{
   try{
    /**  Reading data by id_:, if wrong id name get null
    const data =await employeeModel.findById('6635a9515a419d95992f6a1b')
    */

    /**- Read by name, findOne()...for one 
    const data =await employeeModel.find({name:"Govind"})
    for one we get null, in find()..wrong name get [] empty array
    */

   /**
    * for deal with the multiple condtions- complex where clause
    */
   const data=await employeeModel.where("name").equals("Govind").where("age").gt(20).limit(2)
    console.log(data);
   }catch(err){
    console.log(err);
   }
}
/** const deleteQueries= async ()=>{
   try{
    // delete one
   //delteMany
   console.log("delete this");
   const data=await employeeModel.deleteMany({name:"Govind"})
    console.log(data);
   }catch(err){
    console.log(err);
   }
}**/
