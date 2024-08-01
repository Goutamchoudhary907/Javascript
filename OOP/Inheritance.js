class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{                          
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai=new Teacher("chai","chai@teacher.com","123")
chai.addCourse()
chai.logMe()
const tea=new User("tea")                                                         // tea is a user so it does not have access of addCourse() because it is only method of teacher
// tea.addCourse()
tea.logMe()

console.log(chai===tea);                                                          // false; both are not same

console.log(chai instanceof Teacher);                                             // true 

console.log(chai instanceof User);                                                // true as Teacher extends user