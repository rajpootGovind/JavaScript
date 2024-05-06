const http =require("node:http")
const server =http.createServer((req, res)=>{
    if(req.url==="/hello"){
        res.end("hello! I Am Govind")
    }else{
        res.end("invalid url")
    }
})
server.listen(8888,()=>{
    console.log("created successfully");
})
