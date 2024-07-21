const isUserLoggedIn=true

if(isUserLoggedIn){
 console.log("User logged in ");     
}

if(2=="2") {
    console.log("Executed");
}

if(2==="2") {
    console.log("Executed");
}

const balance=1000
if(balance >500) console.log("Test");


const debitCard=true

if(isUserLoggedIn && debitCard && balance){
    console.log("Allow to buy course ");
}

const userEmail=[]
if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj) .length===0){               // make arr of key and check length 
    console.log("Object is empty");
}

// falsy values -> 0,-0,false,BigInt 0n , "", null , undefined, NaN
// truthy values-> "0", 'false', " " , [], {}, function(){}
