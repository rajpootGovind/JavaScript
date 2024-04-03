// event Object(e/evt/event) gives the details of the event(like..type,target,clientX...)

let divDetails=document.querySelector("#divDetails")
divDetails.onmouseover=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
}

let btn= document.querySelector("#btn")
btn.onclick=(e)=>{
    console.log(e.target);
}