function takeColors(color){
    let getcolor=()=>{
        console.log("ok");
        document.body.style.backgroundColor=`${color}`;
    }
    return getcolor;
}

document.querySelector("#orange").onclick=takeColors("orange")
document.querySelector("#green").onclick=takeColors("green")