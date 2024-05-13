//generate random color
let randomBGcolor= ()=>{
const hex="0123456789ABCDEF"
let color="#"
let result=""
for(let i=0 ;i<6; i++){
  let code= hex[Math.floor(Math.random()*16)]
  result =code+result;
  //console.log(result);
}
//console.log(color+result);
let randomColor=color+result
return randomColor
}
let bodyColor=()=>{
document.querySelector("body").style.backgroundColor=randomBGcolor()
};
let colorChanging;
let backgroundColor=()=>{
     colorChanging =setInterval(bodyColor,1000)
}

document.querySelector("#stop").addEventListener("click", ()=>{clearInterval(colorChanging)})
document.querySelector("#start").addEventListener("click", backgroundColor)