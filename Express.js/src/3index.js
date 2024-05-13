//1.we can pass objects or objects of an array.
//2.res.send() & res.json() are same, but res.json() also convert non object data types to json format.

const express= require("express")
const app = express()

const port = 8888;

// app.get("/",(req,res)=>{
//     res.send([
//         {
//             name:"govind",
//             age:24,
//             capabilities:undefined
//         },
//         {
//             name:"birju",
//             age:25,
//             job:null
//         }
//     ])
// })
app.get("/",(req,res)=>{
    res.json([
        {
            name:"govind",
            age:24,
            capabilities:undefined
        },
        {
            name:"birju",
            age:25,
            job:null
        }
    ])
})

app.listen(port,()=>{
   console.log(`server is listen in port no${port}`)
})