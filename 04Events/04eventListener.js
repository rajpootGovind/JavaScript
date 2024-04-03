// for one event we can create multiple event listeners
let div=document.querySelector("#div")
div.addEventListener("mouseover",(event)=>{console.log('we are in div');
console.log(event.type); console.log(event.target);})


let btn2x=document.querySelector("#btn2x")
btn2x.addEventListener("dblclick",()=>{console.log('we clicked two times');})

btn2x.addEventListener("dblclick",()=>{console.log('we clicked two times-2nd handler');})

//Does't override to the 1st event like event previous handler, both even will occur.

//Remove
let handler3= ()=>{console.log('we clicked two times-3rd handler');}
btn2x.addEventListener("dblclick", handler3)

btn2x.addEventListener("dblclick",()=>{console.log('we clicked two times-4th handler');})

//--> btn2x.removeEventListener("dblclick",()=>{console.log('we clicked two times-3rd handler');})
// 2nd handler will not remove bcz both handers functions are loacted in different memory location.so
// we assign a ref. to the 3rd handler.then pass to remove event listener.
btn2x.removeEventListener("dblclick",handler3)

//3rd event handler removed....




