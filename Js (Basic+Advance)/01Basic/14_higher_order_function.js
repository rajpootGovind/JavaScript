// Higher order Function- fuction which fuction as a parameteres and return also function
function math(func,num1,num2){
    return func(num1,num2)
}
function add(num1,num2){
    return num1+num2 
}
let res = math(add,5,7)
console.log(res);
//-02- Anonymous fn as a parameter
function print(){
    return function(){
        console.log("Function working good");
    }
}
let result = print()
console.log(result);

// by arrow function
let operation= (div,a,b)=>div(a,b);// implicit return
const div=(x,y)=>x/y;
console.log(operation(div,90,9));