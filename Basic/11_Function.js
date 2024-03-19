// function add(x=100,y=200,z=300,a=400){
//     let res = x+y+z+a ;
//     console.log(res);
// }
// //console.log(add(3,4,6)) // NaN -> for overcome to this we assign default value to parameters
// add(4,6,8,1)
function func(a,b,c){
    console.log("Begin "+arguments)// When fuction does not accept any arguments but force
    console.log(arguments)
    console.log(a+b+c);
}
func(1,2,4,4,5,6,6,7,86)

function func1(){
    console.log("harey Ram");
    console.log(arguments);
}
console.log(func1(1,3,5,6,78,8));//undefined