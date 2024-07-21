// Immediately Invoked Function Expressions (IIFE)
// used to remove pollution created by global scope variables 

 (function example(){               // named IIFE
    console.log(`DB CONNECTED`);
 })() ;                                 // semicolon is must to end execution 

 (  () => {
    console.log(`DB CONNECTED TWO`);
 }

 )