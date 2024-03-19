/**let person = {
    name: "Govind",
    age: 23,
    adress: {
        city: "Mahoba",
        state: "UP",
        country: "India"
    }
}
console.log(person)
console.table([person,person.adress])

person["companyName"] = "tcs"// for ADD
//person.companyName ="tcs"...[]-notation ot .-notation both can use for data manupulation
console.table([person])
// for remove- delete
console.log(delete person.age)
console.table([person])
console.table([person,person.adress]);*/

//for iterate or fetching the data or fething the entries
 let run=(a,b) => {
    return a+b;
}

let car = {
    company: "tata",
    price : 345674.67,
    color : "Black",
    madeBy :{employee01:"assemble",employee02:"parts"},
    activity: run(3,7)
}
for (let key in car) {
   // console.log(key);// for key only
  // console.log(car[key])//for value only*WE CAN'T USE HERE ". IN PLACE OF []"*
   //console.log(car.activity)
    console.log(key, "=>",car[key])// for all data of entries    
}
// FOR OBJECT TO IN THE FORM OF ARRAY -
//list of all keys-> we have an Object(Global object)which have a inbuilt method keys()
console.log(Object.keys(car))
// list of all values -> Object have a inbuilt method values()
console.log(Object.values(car))
// for key & values or entries- entries()
console.log(Object.entries(car)) 
console.log(car);

//CLONNING- Object have assign(), if we wanna to add value than we use {} inside ()
let cloneCar = Object.assign(car,{mode:"automatic"})
console.log(cloneCar);
//let clonecar02 = Object.assign()

console.log(car.hasOwnProperty("price"));//for cheaking 
cloneCar.mode= "customise";//for Update
console.log(cloneCar);