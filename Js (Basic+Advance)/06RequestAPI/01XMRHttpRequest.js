//XMLHttpRequest is a type of class
let xmr= new XMLHttpRequest();
const strURL ="https://api.github.com/users/rajpootGovind"
xmr.open('GET',strURL)
// xmr.onreadystatechange=console.log(xmr.readyState);
xmr.onreadystatechange = function(){
console.log("ok");
console.log(xmr.readyState);
if(xmr.readyState === 4){
console.log(this.responseText); 
 }
}

xmr.send()

