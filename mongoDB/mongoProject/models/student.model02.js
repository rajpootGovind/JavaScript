/**
 * shchema with validations/ constraints
 */
const mongoo = require("mongoose");

const studentsSchema = new mongoo.Schema({
     name:{
          type:String,
          required:true
     },
     age:{
          type:Number,
          min:19
     },
     email:{
          type:String,
          lowercase:true,
          minLength:16,
          required:true
     },
     subject:[String]
     // validation field does't show
},{versionKey:false, timestamps:true})

//model() used to create collection , we write in singular form it will auto converted in prural.
//second parameter define the structure of documents/schema.
module.exports = mongoo.model("stud",studentsSchema)
