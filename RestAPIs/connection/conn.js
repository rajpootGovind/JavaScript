const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/api_data")

const db = mongoose.connection;
db.on("error",()=>{
    console.log(error);
})
db.once("open",()=>{
    console.log("connected to database")
})