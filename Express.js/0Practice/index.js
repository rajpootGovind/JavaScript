/**
 * 1.convert to json
 * 2.add it to another file.
 * 3.read file.
 * 4.again convert it to object
 * 5.console.log
 */
const user = {
    name:"Govind",
    age:19,
    address:{
        city:"mahoba",
        state:"U.P."
    }
}

const toJson = JSON.stringify(user)
console.log(toJson);
// for add it to another file
const fs = require("fs")
console.log(typeof fs);

const EventEmitter=require("events")
console.log(typeof EventEmitter);

const data = fs.writeFile("0Practice/input.txt",toJson,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("content added")
    }
})

fs.readFile("0Practice/input.txt",'UTF-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
    console.log(JSON.parse(data));
})

// const toObject=JSON.parse(toJson)
// console.log(toObject);