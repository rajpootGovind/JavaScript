// String-
let s1 = "Govind"
let s2 = "rajpoot"
let s3 = "This is my full name"
let fullName = (`i am ${s1} ${s2} and ${s3}`)// new ways of string concatenating
console.log(fullName);
/**console.log(typeof Number);
console.log(typeof BigInt);
console.log(typeof String);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof Symbol);
console.log(typeof Boolean);
console.log("**********Non-primitive***********");
console.log(typeof Object);
console.log(typeof Array);
console.log(typeof Function);*/
console.log(typeof fullName);
console.log(typeof s1);
console.log(typeof arguments)

//Arrays-
const array = new Array(1,2,3,4,5)
let array01 = [6,7,8,9]
let array02 = [10,11,12,13,14]
let finalArray = [...array, ...array01, ...array02] // spread for adding multiple array(Better version of concat)
// flat()- multi level array to single level array by taking an arguments
console.log(finalArray);
// converting Into Array
newArray = Array.from("Govind")// String to array
//console.log(s1.join(""));-> join() is used for converting an Array into an String. not string to array
console.log(newArray);
let n1 = 20
let n2 = 30
let n3 = 40
console.log(Array.of(n1,n2,n3))

//Object-
const mySymb =Symbol("208,Shahpahari")
let car = {
   carName: "tata",
   price: 3633783.8,
  [mySymb]: "208,Shahpahari" //-> console.log(car.[mySymb])
 }
for(let key in car){
    console.log(key,"=>",car[key])
}
// console.log(car[mySymb]);
// console.log(car["name"]);
const user ={
    name: "Govind",
    age: 19
}
let newObject = {...car,...user}
console.log(newObject);