const mongoose = require("mongoose")
const validator = require("validator")
//console.log(typeof validator);

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:15
    },
    age:{
        type:Number,
        min:18,
        required:true
    },
    email:{
         type:String,
         required:true,
         unique:[true, "email already taken"],
         validate(value){
            if(!validator.isEmail(value)){
                throw new error("invalid email")
            }
         }
    },
    address:{
        type:String
    }
})
console.log(typeof studentSchema);
module.exports = mongoose.model("student",studentSchema)