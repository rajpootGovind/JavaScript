let http =require("node:http")
const server = http.createServer((req, res)=>{
    if(req.url==="/hello"){
       res.end("server is running")
       console.log("server is running")
    }else{
        res.end("server is not running")
    }
})
server.listen(8000,()=>{
    console.log("server is created");
})