"use strict" ; // treat all JS code as newer version

// alert("Hii")       we are using node js not browser
console.log(3+3);

/*
primitive (Stack)
 String , Number , boolean , null , undefined , Symbol , bigInt 
 
*/

const id=Symbol('123')
console.log(id);

console.log(typeof "Goutam");
console.log(typeof null);
console.log(typeof undefined);


// non primitive   (Heap)
// array , function ,object 
const arr=["ram" , "Roy" , "Jack"]

let myObj={
    name:"hitesh",
    age:22
}

const myFunction=function(){
    console.log("Hello")
}

console.log(42/+0);
console.log(42/-0);