const mongoo = require("mongoose");

const studentsSchema = new mongoo.Schema({
     name:String,
     age:Number
})

//model() used to create collection , we write in singular form it will auto converted in prural.
//second parameter define the structure of documents/schema.
module.exports = mongoo.model("student",studentsSchema)
