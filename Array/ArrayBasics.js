const myArr=[0,1,2,3,4,5]

const myArr2=new Array('a','b','c','d')
console.log(myArr2);

myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)        // insert at start
console.log(myArr);
myArr.shift()           // remove first element
console.log(myArr);

const newArr=myArr.join();        // add all array elements into a string

console.log(newArr);


 // slice, splice 
 console.log("Slice,Splice Methods:");
 console.log("A",myArr);

 const my1=myArr.slice(1,3)      // return copy of a section of array
 console.log(my1);
 console.log("B",myArr);

 const my2=myArr.splice(1,3);     // remove elements from array

 console.log("C",myArr);
 console.log(my2);