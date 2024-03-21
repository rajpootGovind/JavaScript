// used to itetrate an array.(object and mutable)
// array= objects array, string array...etc 

// -String array
let team = ["sachin", "dravid", "ganguly","sehwag"]
team.forEach((player)=> console.log(player))// call-back fuction does't have name

// objects array
let city =[
   {
    houseNum : 208,
    address : "Shahpahari,Mahoba",
    personName: "Govind"

    },
   {
    houseNum : 209,
    address : "Shahpahari,Mahoba",
    personName: "Bhavisya"

    },
   {
    houseNum : 210,
    address : "Shahpahari,Mahoba",
    personName: "Anil"

    }
]

city.forEach((object,index,array) => {console.log(`${object.houseNum},${index}`)})
city.forEach((object,index,array) => {console.log(`${object.address},${index}`)})
city.forEach((object,index,array) => {console.log(`${object.personName},${index}`)})