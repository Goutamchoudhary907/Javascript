const user={
    username:"Hitesh" ,
    price:999 , 

    welcomeMessage:function(){
       console.log(`${this.username} , welcome to website`); 
       console.log(this);                   // print current context 
    }
}

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()

console.log(this);                           // empty object , because we are in node , in browser global obj ect is window


function one(){
    let username="hitesh"
    console.log(this.username);            // not works inside function , gives undefined
}
one()


const Two=function(){
    let username="hitesh"
    console.log(this.username);           
}
Two()

const Three= () =>{
    let username="hitesh"
    console.log(this.username); 
}
Three()