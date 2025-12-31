class User{
    constructor(username){
        this.username = username;
    }

    printMe(){
        console.log(`Username: ${this.username}`)
    }

    // Static => stops the methods usage

    static createId(){
      console.log(`123`);
    }
}

const abhisek = new User("Abhisek");
// abhisek.createId();

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const ram = new Teacher("ram","ram@ram.com");
ram.printMe()
ram.createId(); // doesnt work