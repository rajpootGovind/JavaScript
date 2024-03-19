//Arrays are objects in JS and mutable in nature
// Array is a basic data structure. where String is a data type.

let array = [2,4,6,6,7,8]
console.log(array);
let array02 = new Array(6); // another way of expressing
console.log(typeof array02);
array02[0]= 3;
array02[1]= 4;
array02[2]= "ok";
array02[3]= 6;
array02[4]= 'G';
array02[5]= 8;
console.log(array02);
// for length
console.log(array.length)
console.log(array02.length)
array[0]= "Change"
console.log(array);// ARRAYS ARE MUTABLE

// SLICING-slice()- it does't change or mudify the original array.
console.log(array.slice(1,3))
console.log(array.slice(-4,-1))
console.log(array)

// *SPLICING- splice()- it can change or modify the original array.
console.log(array.splice(2,2))
console.log(array)
console.log(array.splice(1,2,"add",4,6,7))
console.log(array)

// data insertion - push() for rare-end insertion, unshift() for front-end insertion 
// for Deletion - pop() for rare-end deletion, shift() for front-end deletion
console.log(array.push(2,5,"ok"))
console.log(array)
console.log(array.unshift("front",3,4,"add"))
console.log(array)
//Sorting- sort()
array.sort()
console.log(array);
//reverse-reverse()- arrays are mutable
let reverse =array.reverse()
console.log(reverse)// same
console.log(array)// same
// CONCAT-concat()
let finalArray=array.concat(array02)
console.log(finalArray);
console.log(array)
console.log(array.splice(0,5).reverse())// MULTIPLE METHOD
console.log(array);
// Convert Array to in a String
console.log(array.join())
console.log(array.join(""))
console.log(array.join("*"))
console.log(array)
// length, index of
console.log(array.length)
console.log(array.indexOf(3))