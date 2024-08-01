class User{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    get email(){
        return this._email.toUpperCase()                             // make our own get method to get value ; here we use _email instead of email because constructor has its own get method 
    }                                                                // so if we use email then our get method and constructor get method both want to get value ; by doing this own method get value

    set email(value){                                               // while set email we set the original value ; by chnaging get method we show our dersire value to user instead of original value
         this._email=value 
    }
    get password(){
        return this._password.toUpperCase()                          // same for password 
    }

    set password(value){
      this._password=value
    }
}


const hitesh=new User("h@hitesh.ai","abc")
console.log(hitesh.password);
console.log(hitesh.email);


// Getter Setter using properties

function User2(email,password){
    this.email=email;
    this.password=password
}

Object.defineProperty(this,'email',{                                   // use definePropert method of Object and treat get , set as function
    get:function(){
    return this._email.toUpperCase()
 } , 
    set:function(value){
    this._email=value;
 }
})
Object.defineProperty(this,'password',{
    get:function(){
    return this._password.toUpperCase()
 } , 
    set:function(value){
    this._password=value;
 }
})

const chai=new User2("chai@chai.com","chai")
// console.log(chai.email);
// console.log(chai.password);


// Getter setter using object
const User3={
    _email   :"h@hc.com" ,
    _password:"abc" ,

    get email(){
        return this._email.toUpperCase()
    } ,

    set email(value){
        return this._email=value
    }
}

const tea= Object.create(User3)
// console.log(tea.email);                                           // here we use _email or email both because it treat get email() as a property not a method 
                                                                  // so both _email and email works same 