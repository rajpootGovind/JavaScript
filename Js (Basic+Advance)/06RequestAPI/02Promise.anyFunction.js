const gf01Promise =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("gf01:iam ready for date")
        }else{
            reject("gf01: phone is unreachable")
        }
    },2000)
})
const gf02Promise =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("gf02:iam ready for date")
        }else{
            reject("gf03: i am ill")
        }
    },1000)
})
const gf03Promise =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("gf01:iam ready for date")
        }else{
            reject("gf01: my friends are coming")
        }
    },3000)
})
Promise.any([gf01Promise, gf02Promise, gf03Promise])
.then((result)=>{
    console.log(result);
    console.log("valentine date is confirm");
})
.catch((result)=>console.log(result+" :how to be join bajrang dal"))