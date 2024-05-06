console.log("index.js file")

//const add = require("./01localmodules")
const mul = require("./01localmodules")
console.log(typeof mul);

console.log(mul.add(5,7));
console.log(mul.mul(5,7));
