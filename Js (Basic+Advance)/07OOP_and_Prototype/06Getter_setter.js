//property based getter and setter
//for making private to the properties we use underscore.

class User{
    constructor(username, email){
     this.username = username;
     this.email = email;
    }
    get email(){
        return this._email;
    }
    set email(value){
        this._email= value.toUpperCase();
     }
}

const govind = new User("Govind", "h@gmail.com");
console.log(govind.email)


/**  getter and setter secure the data
 * setter set the data of constructor
 * and getter get the value from setter.
*/