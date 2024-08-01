const promiseOne=new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){                                              // callback for resolution or rejection of the promise
    console.log("Promise comsumed");
})

new Promise(function(resolve, reject){                                   // also create promise without storing in variable 
    setTimeout(function(){
        console.log("Async task 2");
        resolve(); 
    },2000)
}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree=new Promise(function(resolve, reject){                
    setTimeout(function(){
        resolve( {username:"Chai", email: "chai@example.com"})           
    },3000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve, reject){                         
    setTimeout(function(){
        let error=true;
        if(!error){
         resolve( {username:"Hitesh", password: "123"})                    // resolve code run when there is no error 
        } else {
            reject('ERROR: Something went wrong')                          // reject code run when any error occurs
        }
    },4000)
})

// const username=promiseFour. then((user) => {
//     console.log(user);
//     return user.username
// })
// console.log(username);

promiseFour
.then((user)=>{                                                         // tr catch syntax is used to prevent code from errors and finally block executes always 
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promises is either resolved or rejected"))


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
         resolve( {username:"Javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },5000)
    })

   async function consumePromiseFive(){                                  // this is another way of consume promise 
    try {
        const response=await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
   }
   consumePromiseFive()



//    async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')                 // fetch data from this url , await keyword is neccessay here 
//         const data=await response.json()                                                         // store fetched data , .json() is used to convert it into json format data is come in string , await is also neccessary here
//         console.log(data);                                                                                       
//     } catch (error) {
//         console.log("E:", error);
//     }
//    }
//    getAllUsers()


   fetch('https://jsonplaceholder.typicode.com/users')                                              // another way of using fetch 
   .then((response) => {
    return response.json()
   })
   .then((data) => {                                                                                // this is a nested then which is used to resolve above then 
   console.log(data);
   })
   .catch((error) => console.log(error))