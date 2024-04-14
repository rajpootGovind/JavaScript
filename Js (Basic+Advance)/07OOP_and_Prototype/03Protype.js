function scoreCard(name,score){
    this.name=name;
    this.score=score;
    
}
scoreCard.prototype.increment = function(){
    this.score++;
}
scoreCard.prototype.print=function(){
    console.log(this.score);
}
const user01 =new scoreCard("birju",75)
const user02s = scoreCard("arpit",74.9)

console.log(user01);
user01.print()

/** //This is advance part-
 * 
 *  Here what happen behind the scenes when new keyword is used:
 * A new keyword is created: the new keyword is initiates the creation of new JavaScript object.
 * A prototype is linked: the newly craeted object get linked to the prototype property of the constructor function.
 * this means it has access to propertues and methods defined on the constructor's prototype.
 * The constructor is called:
 * The object is returned:
 * 
 * thats all happen in JS when we use new keyword.
 * for making easier to this process, we use class keyword. 
 */
