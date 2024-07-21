// singleton
// object.create

// object literals

const mySymbol=Symbol("Key1")            // symbol
const JsUser={ 
    name:"Hitesh" ,
    "Full name":"hitesh Choudhary",        
    age:18 ,
    [mySymbol]:"Key1" ,                   // syntax of symbol inside object 
    location:"Jaipur" ,
    email:"hitesh@google.com" ,
    isLoggedIn:false ,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email);                        
console.log(JsUser["email"]);                    // both ways to access data
console.log(JsUser["Full name"]);
console.log(JsUser[mySymbol]);                   // symbol can only accessed using [] not using .
console.log();

JsUser.email="hitesh@chatgpt.com"
// Object.freeze(JsUser)                   // prevent change in any property 
JsUser.email="hitesh@microsoft.com"
console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo=function() {
    console.log(`Hello Js User , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());