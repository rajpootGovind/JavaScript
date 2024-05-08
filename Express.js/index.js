const express = require("express")
console.log(typeof express);
//we have to execute for use the function
const app = express();

app.get("/",(req,res)=>{
    res.send("after creating server browser exept a get req.")
})

/**
 * create a express server
 */
app.listen(8008,()=>{
    console.log("express server started");
})