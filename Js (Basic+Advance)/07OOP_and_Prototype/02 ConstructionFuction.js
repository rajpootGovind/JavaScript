//new- by the use of new keyword we can create multiple instances of single object
let car ={
    name:"suzuki",
    company:"maruti",
    price:"2337484"
}
let carType=function type() {
    console.log("automatic");
}
function carCompany(name,company,price){
    this.name=name;
    this.company=company;
    this.price=price;

    return this ;

}

const carOne= new carCompany("innova","tata",263738)
const carTwo= new carCompany("fortuner","toyota",2603738)
const carThree= new carCompany("audi-A6","Audi",7063738)
console.log(carOne);
console.log(carTwo);
console.log(carThree);
console.log(car);
console.log(typeof(carOne));
console.log(carType);