const appuser={}

appuser.id="123abc"
appuser.name="Sammy"
appuser.isLoggedIn=false

// console.log(appuser);

const regularUser={
    email:"some@gmail.com", 
    fullname:{
        userFullname:{
            firstname:"Hitesh" ,
            lastname:"Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullname);

const obj1={1:"a" , 2:"b"}
const obj2={3:"a" , 4:"b"}

// const obj3={obj1, obj2}            
// console.log(obj3);

const obj3=Object.assign(obj1,obj2)
console.log(obj3);

const obj4={...obj1,...obj2}             // for split same as array 
console.log(obj3);  


console.log(appuser);
console.log(Object.keys(appuser));            // return array of keys 
console.log(Object.values(appuser));
console.log(Object.entries(appuser));         // make arr of key value 


console.log(appuser.hasOwnProperty('isLogged'));