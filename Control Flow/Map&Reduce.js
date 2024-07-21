const num=[1,2,3,4,5,6,7,8,9,10]

const myNum= num.map( (num) => num+10)              // same as filter 
console.log(myNum);

const newNum= num                                 // chaining 
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num>=40)

console.log(newNum);                



const myNums=[1,2,3]

const myTotal=myNums.reduce( function (acc,currVal) {
    console.log(`acc:${acc} and currVal:${currVal}`);
    return acc+currVal;                                     // return sum of all elements 
} ,0)                                                      // initial value of accumulator 

console.log(myTotal);

const myTotal2=myNums.reduce( (acc,curr) => acc+curr , 0)             // using arrow function 
console.log(myTotal2);



const shoppingCart =[
 {
     itemName:"Js course " ,
     price: 2999
 },
 {
     itemName:"py course " ,
     price: 999
 },
 {
     itemName:"mobile dev course " ,
     price: 5999
 },
 {
     itemName:"Data science course " ,
     price: 12999
 },
]
 
const priceToPay=shoppingCart.reduce( (acc,item) => acc+item.price ,0)
console.log(priceToPay); 