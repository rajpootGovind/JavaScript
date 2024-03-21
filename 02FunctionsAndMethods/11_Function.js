/**function add(x=100,y=200,z=300,a=400){
    let res = x+y+z+a ;
    console.log(res);
}
//console.log(add(3,4,6))
add(4,6,8,1)// NaN -> so overcome to this we assign default value to parameters
**/
function func(){
    console.log("Begin "+arguments)// When fuction does not accept any arguments but force
    console.log(arguments)
}
func(1,2,4,4,5,6,6,7,86)