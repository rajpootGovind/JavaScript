console.log("we are in 02index.js")

const user=require("./02class")
const user1 =new user("birju", "kanpur up");
// user1.setName("birju")
console.log(user1.name);

user2 = new user("arpit","lucknow up");
// user2.setAddress("kanpur U.P.")
console.log(user2.address);

//import json
const json =require("./02import.json")
console.log(json.address.city);