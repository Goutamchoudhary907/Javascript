class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email
         this.password=password
    }

    encryptPassword(){                                                              
        return`${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new User("Chai","chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());


//  done this without class
function anotherUser(username,email,password){                                      // create User as function 
    this.username=username;
    this.email=email
     this.password=password
}

 anotherUser.prototype.encryptPassword= function(){                                 // and functions as prototype 
 return`${this.password}abc`
 }

anotherUser.prototype.changeUsername= function(){
     return `${this.username.toUpperCase()}`
}

const tea=new anotherUser("tea","tea@gmail.com","123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
