async function printHelloAfterAwait(){
    console.log("first hello");
    const promise = new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            resolve("hello boys")
        },2000)
    })
    const data=await promise;//  start wating for the promise promise to be completed.
    console.log(data);
    console.log("before last");
}
    console.log("last hello");
    
printHelloAfterAwait()