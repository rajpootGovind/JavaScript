let name = "Govind"
let surname = "Rajpoot"
console.log(name, surname);
//-> for adding
console.log(name+surname);// concatenation operator(+)
console.log(name.concat("-"+surname)) //CONCAT method

name[4]= "a"
console.log(name);// STRINGS ARE IMMUTABLE
 
// for index-> indexOf()
// for character -> charAt()
console.log(name.indexOf('d'));
console.log(surname.indexOf('d'));
console.log(name.charAt(3));
console.log(name.charAt(10));
// -SLICING...slice()..- +ve means forward direction, -ve means backward direction
// - carefull about arguments order 
console.log(name.slice(2, -1));
console.log(surname.slice(3,4));
console.log(surname.slice(-5,-1));
console.log(surname.slice(-5));
// toUpperCase()
// toLowerCase()
// split()- for split(remove that part of string) string. it convert STRING TO ARRAY OF STRING by seperator
console.log(name.split('i'));
console.log(name.split("vi"));
console.log(name.split(""));
console.log(name.trim())
// FOR LENGTH- length
console.log(surname.length);
console.log(typeof surname);
console.log(name)
console.log(name.replace("in","ar"))
