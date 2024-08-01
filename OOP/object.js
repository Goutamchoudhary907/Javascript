const user={
    username:"Hitesh",
    loginCOunt: 8 ,
    signedIn: true , 

    getUserDetail: function(){
     console.log(`Username: ${this.username}`);                            // this is used for current context 
     console.log(this);                                                    // this gives all values of a object  
    }
}
console.log(user.getUserDetail());

 