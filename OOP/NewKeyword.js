// const promiseOne=new Promise()
// const date= new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
// const userOne=User("hitesh",12,true)                                                   // if we do this without new keyword , userTwo overwrites the values of userOne
// const userTwo=User("ChaiAurCode",11,false)                                             // and new instance is not created , using new keyword create new instance

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne);
console.log(userTwo);

/*
when we use new keyword :
1. Empty object is created 
2. Constructor function is called because of new keyword 
3. This constructor function inject all arguments in this keyword 
*/

console.log(userOne.constructor); // [function:user] - refernce of self

function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// new keyword
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  // create our own prototype on our object
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25); // new keyword is necessary
const tea = new createUser("tea", 250);

chai.printMe();
tea.increment();
tea.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
 If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.),
 the newly created object is returned.

*/
