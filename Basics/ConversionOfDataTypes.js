let score="33abc"

console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
"33" => 33
"33abc" => NaN
true  =>1 ; false  =>0
*/


let isLoggedIn=true;

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* Conversion in boolean 
1 => true ; 0 => false
"" => false
"hitesh" => true
*/


let num=33
let stringNumber=String(num)
console.log(stringNumber);
console.log(typeof stringNumber);

// comparison
console.log("Comparison:");
console.log("2" >1);
console.log("02" >1);

console.log(null >  0);    
console.log(null == 0);
console.log(null >= 0);        // treat null as 0

console.log(undefined==0);
