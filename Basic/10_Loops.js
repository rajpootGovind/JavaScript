// let age=0
// while (age<18) {
//     console.log("ok");
//   age++
    
//     if (age==10) {
//       console.log("end");
//       break
//     }
// }

for (let num = 0; num < 100; num++) {
 
  if (num%2 != 0) {
    console.log("*");
    continue
  }
  console.log(num);
  
}