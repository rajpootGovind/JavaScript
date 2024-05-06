const modelMongoo = require("mongoose")
const employeeSchema = new modelMongoo.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        minLength:9,
        required:true
    },
    age:{
        type:Number,
        max:60,
        required:true
    },
    city:{
        type:String
    }
},{versionKey:false, timestamps:true})

module.exports = modelMongoo.model("employee",employeeSchema)

// console.log("all set to go")