class User{
    constructor(username, email, password){
        this.username=username;
        this.email= email;
        this.password=password;
        console.log("this is for cheacking call the constructor");
    }
    securePassword(){
        return(`${this.password}abc`)
    }

}
class NewUser extends User{
    constructor(username, email,password){
        super(username, email, password)
//super()
        this.username=username;
        this.email= email;
         this.password=password;

    }
}


const birju = new User("Brijesh","birju@gmail.com","1234");
let user01=birju.securePassword();
console.log(user01);
console.log(birju.email);

const arpit= new NewUser("arpit","appu@gmail.com","12");
console.log(arpit.username);
console.log(arpit.securePassword());