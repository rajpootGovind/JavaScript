let myArr = [1,2,3,4,5,6,7,8,9]
let newArray = myArr.filter((num)=>num>3)// implicit return, { }- explicit return
console.log(newArray);

// Book program
const myBooks = [
    {
        name:"GOT",
        genre:"Fiction",
        publish:1992,
        edtion:2008
    },
    {
        name:"Hobbit",
        genre:"Fiction",
        publish:1982,
        edtion:2014
    },
    {
        name:"Nepolian",
        genre:"History",
        publish:1972,
        edtion:2004
    },
    {
        name:"Bhagwat Geetha",
        genre:"Mythology",
        publish:1920,
        edtion:2020
    },
    {
        name:"Witcher",
        genre:"fiction",
        publish:2000,
        edtion:2018
    },
    {
        name:"Ramayana",
        genre:"Mythology",
        publish:1984,
        edtion:2008
    },
    {
        name:"Jhansi ki Rani",
        genre:"History",
        publish:1900,
        edtion:2008
    }
]
getNewBooks = myBooks.filter((bookRef)=>(bookRef.genre==="Mythology"))
console.log(getNewBooks);