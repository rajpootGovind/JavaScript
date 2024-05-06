/**
 * http module- used for create web server
 * http- hypertext transfer protocol, define format for communicate client and server.
 * with the help of node.js we create web server that can transfer data over http.
 */
const http = require("node:http")
const server =http.createServer((req, res)=>{
    res.writeHead(200);
    res.end("Hello! Govind")
})
server.listen(8000,()=>{
    console.log("ok created")
})

//writeHead() - It is used to send a response header to the incoming request.