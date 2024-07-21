const accountId=144553
let accountEmail="abc@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState
/*
prefer not to use var because of block scope 
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])

var animal = 'lion';

if (true) {
  var animal = 'goat'; 
  console.log(animal);
}

console.log(animal);

if(true) { 
  let a=1;
}

{
  console.log(bar);
  // console.log(foo);       cannot access before initalize
  var bar=1;
  let foo=2;              
}

