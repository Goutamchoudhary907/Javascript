const score=400;
console.log(score);

const balance =new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));       // number of digits after decimal 

const otherNumber=123.8966
console.log(otherNumber.toPrecision(4));       // for precise value or round off

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));        // for seperate by comma  , according to indian standards


// +++++++++++++++ Math ++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log();
console.log(Math.ceil(4.2));           //round off in upper value always
console.log(Math.floor(4.9));          // round off in lower value always

console.log(Math.random());             // value between 0-1
console.log(( Math.random()*10 ) +1);    // always give value > 0
console.log( Math.floor ( Math.random()*10 ) +1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min +1)) +min );           // for range 10-20
