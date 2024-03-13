let num = 30; // GLOBAL LEVEL SCOPE(GLOBAL VARIABLE)
const name ="Raju"
//name = "bheem"
console.log(name);
function add (b,a){
    console.log("ok");
    let res = b +a ; // FUNCTION LEVEL SCOPE(FUCTION VARIABLE)
    console.log(res)
}
add(4,5)
{
    let name02 = "Govind"// BLOCK LEVEL SCOPE(BLOCK VARIABLE)
    console.log(name02);
    console.log(name);
}
//console.log(name02);//error
/**-we can't reassign the value to a constant variable
 * - var keyword does not have block level scope.
 * -var keyword have hoisted problem(variable internally defined, so we get undefind in place of error)
 * thats why we use let keyword in place of var keyword.
 */

console.log(num01);
//var num01 = 30// undefined- hoisted(return undefined BEFORE INITIALIZATION)
let num01 = 2