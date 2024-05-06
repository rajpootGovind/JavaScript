class User{
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
get name(){
        return this._name.toUpperCase();
    }
set name(name){
    this._name=name;
}
get address(){
    return (this._address).toUpperCase();
}
set address(address){
    this._address= address;
}

}
//const govind =new User("govind","shahpahari,mahoba")
// module.exports=govind;
// govind.setAddress("mahoba")
//  console.log(govind.getAddress());
// console.log(govind.name);

module.exports=User;