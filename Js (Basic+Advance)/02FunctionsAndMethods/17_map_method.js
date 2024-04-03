myArray = [3,5,6,7,8,9,10]

newArray = myArray.map((num) =>num**2 )
console.log(newArray);

// Car 
let Cars = [
    {
        carName:"tata",
        color : "black",
        price : 3066738
    },
    {
        carName:"maruti",
        color : "white",
        price : 556738
    },
    {
        carName:"jaguar",
        color : "white",
        price : 4536738
    },
    {
        carName:"toyota",
        color : "black",
        price : 2536738
    },
    {
        carName:"tata",
        color : "black",
        price : 3536738
    }
]
let fullDetails = Cars.map((object)=>object.madeIn="india")
//console.log(fullDetails);
Cars.forEach((item)=>console.log(item))