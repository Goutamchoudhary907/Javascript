const marvel=["thor" ,"Ironman", "spiderman"]

const dc=["superman" , "flash" , "batman"]

// marvel.push(dc);           take dc array as new element 
// console.log(marvel); 

const all=marvel.concat(dc)
console.log(all);

const allNew=[...marvel, ...dc]        //spread the array elements 
console.log(allNew);

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anotherArr);
const spreadArr=anotherArr.flat(Infinity)          //return new arr with all sub array into one array
console.log(spreadArr);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"}));          //empty arr ,arr type doesnt mention like key , value  


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
