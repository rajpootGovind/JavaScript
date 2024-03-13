
//number, toFixed - upto how much digit we need precision after decimal
let num02 = 678.8754378
console.log(num02.toFixed(3))
// toPrecision()- total untill how much digit we want precision
console.log(num02.toPrecision(5))

// Math-
let num = -456
console.log(Math.abs(num))
console.log(typeof Math)
//randon()
console.log(Math.floor(Math.random()*10)+1)//-> for 1-10 random
//min(), max(),floor(),ceil()
console.log(Math.min(num02.toFixed(3)))
console.log(Math.max(num02))
console.log(Math.floor(num02))
console.log(Math.ceil(num02))
//round- for round-off
console.log(Math.round(num02))

// Date & Time
 let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())// toLocaleString provides , , in variables

let time = Date.now()
console.log(time)
// let newDate = new Date()
// console.log(newDate)
console.log(myDate.getDay());


