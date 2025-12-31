class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username); // access the original username
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`)
    }
}




const hariSir = new Teacher("Hari","hari@ram.com","123")
hariSir.addCourse()


// const userOne = new User("Krishna");
// userOne.logMe()

const binodSir = new User("Binod");
binodSir.logMe()
// binodSir.addCourse() // cant access cuz it is the root

console.log(binodSir instanceof User)// true
console.log(hariSir instanceof User)// true
console.log(binodSir instanceof Teacher) // false
console.log(hariSir instanceof Teacher)// true


