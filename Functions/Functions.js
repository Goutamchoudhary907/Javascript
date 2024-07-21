function calculateCartPrice(...num1){               // rest operator for multiple items 
    return num1
}

console.log(calculateCartPrice(200,400,500));       

const user={
    username:"hitesh" , 
    price:199
}

function handleObject(anyObject){            // pass object in function 
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username:"Sam" , 
    price:399
})


 function returnSecondValue(getArr){
    return getArr[1]
 }

 const myNewArr=[200,400,100,600]
 console.log(returnSecondValue(myNewArr));

 console.log(returnSecondValue([200,900,100,500]));