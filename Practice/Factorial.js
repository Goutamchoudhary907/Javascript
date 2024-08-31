const readline=require('readline');

let rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter number to calculate factorial : " ,(number) =>{
console.log(factorialIterative(number));
console.log(factRecursive(number));

rl.close();
  
})

function factorialIterative(n){
let result=1;
for(let i=2;i<=n;i++){
    result *=i;
}
return result;
}

function factRecursive(n){
    if(n===0 || n===1 || n===2){
        return n;
    } else{
        return n * factRecursive(n-1);
    }

}