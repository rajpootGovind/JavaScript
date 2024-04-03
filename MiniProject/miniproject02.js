let ul=document.querySelector("ul");
ul.addEventListener("click", (e)=>{
        console.log(e.target.parentNode)
        console.log(e.target.tagName);
        if(e.target.tagName==="IMG"){
        let removeIt=e.target.parentNode
        removeIt.remove();}
})