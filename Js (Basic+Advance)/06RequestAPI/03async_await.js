//We use async-await instead of then() and catch() for promise consuming
//in async-await error handled by try catch block
const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            console.log("without error");
            resolve({
                name:"govind",
                age:"19"
            })
        }else{
            reject("error:error is something")
        }
    },3000)
})
//promise consume by async-await
async function consumePromise (){
    try {
        const asyncAwait=await promiseFive
    console.log(asyncAwait);
    } catch (error) {
        console.log(error);   
    }   
}
consumePromise()

async function useApi(){
    try {
        const data= await fetch("https://api.github.com/users/rajpootGovind")
    const dataInJson=await data.json()
    console.log(dataInJson);
    } catch (error) {
        console.log(error);
        
    }  
}
useApi()