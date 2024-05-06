//Processing will occur when all the promises will complete.
let promise01 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("p01:i am in")
        }else{
            reject("i am busy")
        }
    },3000)
})
let promise02 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("p02:i am in")
        }else{
            reject("i am going in shadi")
        }
    },4000)
})
let promise03 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("p03:i am in")
        }else{
            reject("i am ill")
        }
    },2000)
})

Promise.all([promise01,promise02,promise03])
.then((msg)=>console.log("we are going Goa " +msg))
.catch((msg)=>console.log("we are not going Goa " +msg))