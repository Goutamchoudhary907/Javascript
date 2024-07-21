
// Nullish coalescing operator(??) : null undefined

let val;
// val =5 ?? 10
val = null ?? 10          
// val= undefined ?? 15             avoid error or null values
console.log(val);


// Ternary operator 
const price=100
price <=80 ? console.log("Less than 80") : console.log("more than 80");