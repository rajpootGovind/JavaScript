console.log("hello")
// const name=document.querySelector("h2")
// console.log(name.innerHTML);
//print it in given time interval
const name= ()=>{
    console.log(document.querySelector("h2").innerHTML,Date.now()); 
// console.log("govind",Date.now() )
}
let print;
const printName= ()=>{
 print =setInterval(name,1000)}

document.querySelector("#start").addEventListener(
    "click",printName
)
document.querySelector("#stop").addEventListener("click",
()=>{clearInterval(print)})


