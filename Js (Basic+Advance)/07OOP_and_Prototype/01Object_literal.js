const user ={
    username:"Govind",
    age:"19",
    callUser:function(){
        console.log(this.username)
        console.log(this)
    }
    
}
console.log(user.age);
console.log(user.callUser());
console.log(this)