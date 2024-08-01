let myName="hitesh       "

// console.log(myName.length);

let myHeros= ["thor","spiderman"]

let heroPower= {
    thor:"hammer" ,
    spiderman:"sling" , 

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){                              // create our own protoType at uppermost level (Object)
    console.log(`Hitesh is present in all objects`);
}
heroPower.hitesh()                                               // this available for our heroPower object
myHeros.hitesh()                                                 // This is also available for array as we create it on uppermost level 

Array.prototype.heyHitesh= function(){
    console.log(`Hitesh says hello`);
}
myHeros.heyHitesh()                                               // Array has this prototype as we declare for array 
// heroPower.heyHitesh()                                           // But object does not have this prototype because flow is from upper level to dowm level 
                                                                   // object properties passed to array but not array properties pass to object    


  const User={
    name: "Chai" ,
    email:"chai@google.com"
}

const Teacher= {
    makeVideo: true
}

const TeachingSupport= {
    isAvailable: false
}

const TASupport={
    makeAssignment:'JS assignment ' ,
    fullTime :true ,
    __proto__: TeachingSupport
}
 
Teacher.__proto__= User

// Modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)                                       // inheritamce 


let anotherUsername= "ChaiAurCode          "
    
String.prototype.trueLength=function(){                                              // create own prototype 
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);                           // method to remove spaces from length
}

anotherUsername.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()
