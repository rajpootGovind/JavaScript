// let add = (a,b,c) =>{
//     console.log("ok")
//     let res = a+b+c ;
//     console.log(res);
// }
// add(7,8)
// -> Arrow function can't use arguments object.
// --> IIFE(Immediately invoked function expression)
// We does't use function keyword in arrow function
(function(a,b){
    console.log("just checking")
    let res = a+b;
    console.log(res);
})(6,7)
