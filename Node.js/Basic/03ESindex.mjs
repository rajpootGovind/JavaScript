console.log("inside ES index.js");
// import add from "./03add.mjs"
// console.log(add(4,5));   //default import

import{add,sub}from "./03add.mjs"
console.log(add(4,5));

// in Named export - import name(fn name, class name...etc) should be same