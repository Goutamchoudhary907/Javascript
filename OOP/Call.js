function setUsername(username){
    this.username=username
}

function createUser(username,email,password){
    setUsername.call(this,username)                                          // if we want to call another method to set username here , we have to use call method and pass this as reference of current context 

    this.email=email;
    this.password=password 
}

const chai=new createUser("chai","Chai@fb.com","123")
console.log(chai);