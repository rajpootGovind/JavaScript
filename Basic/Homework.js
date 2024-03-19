// taking object as a parameter or passing objct as a arguments
mySymb = Symbol("semiAutomatic");
let car=[{
    company:"tata",
    price:1200000,
    [mySymb]:"semiautomatic"
}]

function func(obj){
    return obj;

}
console.log(func(car));

// passing arguments as an array ans return 2nd digit of an array
let arr =[2,4,5,7,8,,56,67,78]
function array(any){
    return any[1];
}
console.log(array(arr));

//IIFE 
((a,b)=>console.log(a**b))(3,4);

//Chaining
let arr02=[2,4,5,6,7,8,9,10];
let newArr02=arr02.map((array)=>array*2).filter((array)=>array%3==0).reduce(((curr,next)=>curr+next),0);
console.log(newArr02);
//callBack function can take object,array,index as a parameter.

let newArr = car.map((object)=>object.name="rani");
console.log(newArr);
car.forEach((element) => console.log(element));