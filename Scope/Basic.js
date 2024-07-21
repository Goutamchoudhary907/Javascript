
let a=300
if(true){
    let a=10
    const b=20
    var c=30    
}

console.log(c);
console.log(a);
console.log();

function one(){
    const username="hitesh"

    function two(){
        const website="Youtube"
        console.log(username);
    }
    // console.log(website);         doesn't use 

    two()
}
one()


if(true){
    const username="Hitesh"
    if(username==="Hitesh"){
        const website=" Youtube"
        console.log(username+website);
    }
}


// ++++++++++ Hosting +++++++++++++++++++

console.log(addone(5));                       // allowed
function addone(num){
    return num+1
}

// console.log(addTwo(5));                        not allowed

const addTwo=function(num){                   // another way of declare functions 
    return num+2
}