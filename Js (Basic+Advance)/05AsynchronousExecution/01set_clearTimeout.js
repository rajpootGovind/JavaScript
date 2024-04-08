console.log("hello")
//document.querySelector("h1").innerHTML="Good js tutorial"
//we want this will happen after 2 sec.
const changeText= ()=>{
    document.querySelector("h1").innerHTML="Good js tutorial"
}
const changeTitle=setTimeout(changeText,4000)//we pass the handler or its ref.
//if we wanna to stop this change
//clearTimeout(changeTitle)
//but we wanna to do this when an event occur-
document.querySelector("#stop").addEventListener("click",()=>{
    clearTimeout(changeTitle)
})


