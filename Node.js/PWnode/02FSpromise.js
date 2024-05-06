//reading
const fsp =require("node:fs/promises")
const content=fsp.readFile("02output.txt")
.then((data)=>console.log(data.toString()))
.catch((err)=>console.log(err))

//write
fsp.writeFile("03wadaOutput.txt","i make a promise")
.then(()=>console.log("promise done"))
.catch((err)=>console.log(err))