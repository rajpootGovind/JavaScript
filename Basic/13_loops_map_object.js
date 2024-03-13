// function calculateCartPrice(){
//     return arguments
// }
// console.log(calculateCartPrice(100,200,3000,4889))
// //******* By using spread operator */
// function calculateCartPrice01(...num){
//     return num
// }
// console.log(calculateCartPrice01(100,200,3000,4889))

// let count = function (totalNumber){
//     return(`the totan no. is ${totalNumber}`)
//    //console.log("runing");
//   // return 
// }
// let totalCount=count(6876)
// console.log(totalCount);
/** Nested sfor loop
for(let i =0 ; i<=10 ; i++){
    console.log(`outer loop value is ${i}`);
    for(j=0 ; j<=8 ; j++){
        console.log(`inner loop value is ${j}, ${i}`);
    }
}*/
// Iterate to a map
/**const map = new Map()
map.set("IN", "India")
map.set("UK", "United kingdom")
map.set("FR", "France")
map.set("IN", "India")

console.log(map);
 for (const [key, value] of map){
    console.log(`the key ${key} => ${value}`)
 }*/
 const myObject = {
    js : "javascript",
    java : "java",
    Rb : "ruby",
    cpp : "c++"
 }
 for(const key in myObject){
    console.log(myObject[key], "=>" ,key)
 }