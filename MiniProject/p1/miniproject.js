let modebtn=document.querySelector("#modebtn")
let body=document.querySelector("body")
let currMode="light";

modebtn.addEventListener("click", ()=>{
    if(currMode==="light"){
       currMode="dark";
       //classList is used for manupulate class list.
       body.classList.add("dark");
       body.classList.remove("light");// also we have to remove the previous property.

    }else{ currMode="light";
    body.classList.add("light");
    body.classList.remove("dark");
}
   
    console.log("ok its working");
    console.log(currMode);
})