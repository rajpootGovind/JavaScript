/**
 * File system module(FS module)
 * Reading file
 */
//in sync way
const fs = require('fs');
console.log("before reading");
const content =fs.readFileSync('PWnode/02input.txt')
console.log("Know me: "+content);
console.log("After reading the file");

//in Async way
console.log("reading in async way");
fs.readFile("PWnode/02input.txt", (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})

/**
 * Writing in file(new or existed)
 */
// in sync way
console.log("before writing")
fs.writeFileSync("02output.txt","Hello Again..You know me")
//fs.writeFileSync("PWnode/02input.txt","Hello Again..You know me")
console.log("after writing");

//in Async way
console.log("writing in async way");
fs.writeFile("PWnode/02output.txt","Writing by Async process",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("written successfully");
    }
})
//flag object with value a....for APPEND
fs.writeFile("02output.txt"," Writing by Async process",{flag:"a"},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("append successfully");
    }
})