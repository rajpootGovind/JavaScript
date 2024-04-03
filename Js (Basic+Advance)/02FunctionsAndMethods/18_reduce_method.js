myArray = [2,3,4,5,6,7,8,76,6,]
let total=myArray.reduce((preRes, currValue)=>(preRes+currValue),0)
console.log(total);

let shoppingCart = [
    {
    productName: "top",
    color: "red ",
    price: 566
},
    {
    productName: "mobile",
    color: "black ",
    price: 10666
},
    {
    productName: "watch",
    color: "brown ",
    price: 1099
},
    {
    productName: "pant",
    color: "white",
    price: 899
}
]
total = shoppingCart.reduce((preTotal, currPrice)=> (preTotal+currPrice.color),0)// anything we can add(number &string)
console.log(total);
let total01 = shoppingCart.reduce((preTotal, currPrice)=> (preTotal+currPrice.price),0)// anything we can add(number &string)
console.log(total01);