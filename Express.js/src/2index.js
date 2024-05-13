const express = require('express')
const app = express()

const port = 8000;

app.get("/",(req,res)=>{
    res.send("welcome to my home page")
    //res.status(200).send("__________")
})
app.get("/about",(req,res)=>{
    res.send("welcome to my aboutme page");
})
app.get("/contact",(req,res)=>{
    res.send("welcome to my contacts page");
})

app.listen(port, ()=>{
    console.log(`listening to the port no.${port}`)
    
})