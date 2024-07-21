function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");   
}
sayMyName          // reference
// sayMyName()           exceution

function sum(num1,num2){
    console.log(num1+num2);
}

sum(3,4)


function returnSum(num1,num2){
 return num1+num2
}
const result=returnSum(3,5)
console.log(result);


function loginUserMessage(username){
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Jack"));