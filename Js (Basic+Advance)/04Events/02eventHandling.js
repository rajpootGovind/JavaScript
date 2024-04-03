let button1=document.querySelector("#btn01")
button1.onclick=()=>{
    console.log("ok")
    }

    // let button1=document.querySelector("#btn01")
 button1.onmouseover=()=>{
        console.log("hovering")
    }

button1.onclick=()=>{
    console.log('override ok');
    // When we handle same event on same element/node than last event Override the first event.
}

//Drawback- in this type of event handling, at one time we deals with one function.