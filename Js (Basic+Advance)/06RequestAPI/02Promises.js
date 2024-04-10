//promise create
let promiseOne =new Promise((resolve,reject)=>{
    //do an async task
    //DataBase calls, crptography, network
    setTimeout(()=>{
        console.log("promiseOne is created")
resolve();
    }, 3000)
})
//promise consume
promiseOne.then(()=>{
    console.log("promise consumed");
})
// ------------------------------02----------------------------------------------
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promiseTwo ctreated");
        resolve();
    },3000)
}).then(()=>{
    console.log("promiseTwo Consumed");
})
// --------------------------------03--------------------------------------------
 const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise3 is created")
        resolve({
            name:"Govind",
            age:"23",
            address:"shahapahari,mahoba"
        })//we can pass an object or an array
    },3000)
 })
 promiseThree.then((user)=>{
    console.log(user);
 })
 //----------------------------------04---------------------------------------------

 new Promise((resolve,reject)=>{
    let error=true;
    setTimeout(()=>{
        console.log("promise4 is created")
        if(!error){
            resolve(
                {
                    name:"Govind",
                    age:"23"
                }
            )
        }else{
            reject("error:something went wrong")
        }    
    },1000)
 })
 .then((user)=>{
    console.log(user);
    return user.name;
 })
 .then((myName)=>{console.log(myName)})
 .catch((error)=>{
    console.log(error);
 })
 .finally(()=>{
    console.log("program execute successfully");
 })

 //----------------------------------05-----------------------------------------
//Json formatter //fetch()
 fetch("https://api.github.com/users/rajpootGovind")
 .then((data)=>{
    return data.json()
 })
 .then((dataInJson)=>{
    console.log(dataInJson)
 })
 .catch((error)=>{console.log(error)})


