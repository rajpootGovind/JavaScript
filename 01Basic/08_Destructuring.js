// Array destructuring
let arr = [2,45,6,8,9,43]
let[a,b,c,d,e,f] = [2,45,6,[8,9,43]]
console.log(a)
console.log(d)
//console.log(j)// Error
console.log(f);// Undefined

// Objects destructuring-> variables name should be same as the key name
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
let {company, price, color, madeBy:{employee01,employee02}, activity,extra} = car
console.log(price);
console.log(color);
console.log(activity);
//console.log(madeBy);
console.log(extra);// Undefined
console.log(employee02);