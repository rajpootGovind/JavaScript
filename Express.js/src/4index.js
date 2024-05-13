const express = require('express')
const path = require("path")

const app = express()
const port = 8000;

const staticPath = path.join(__dirname,"../public")
const staticPathER = path.join(__dirname,"../public/error/4index.html")
console.log(staticPathER);

//inbuilt Middleware- to serve static file
app.use(express.static(staticPath))
console.log(staticPath);


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
// for adding error 404 page
app.use((req,res)=>{
    res.status(404).send("<h1>ERROR!</h1> <h2>Page Does't Found</h2>")
})

app.listen(port, ()=>{
    console.log(`listening to the port no.${port}`)
})