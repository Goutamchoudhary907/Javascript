let myYoutubename="hiteshchoudhary.com"

let anothername=myYoutubename;
anothername="freeCodeCamp";

console.log(myYoutubename);
console.log(anothername);             // only this changed as it is pass by value 

let userOne={
    email: "user@google.com", 
    upi : "user@ybl"
}

let userTwo=userOne;

userTwo.email="hitesh@google.com"         // both are changed as it is refernce 

console.log(userOne.email);           
console.log(userTwo.email);