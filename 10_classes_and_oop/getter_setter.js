// Mostly Used

class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }


    get email(){
        return `${this._email.toUpperCase()}bruhhh.`;
    }

    set email(value){
        this._email = value
    }


    get password(){
        return `${this._password}ol`
    }

    set password(value){
        this._password = value;
    }
}

const abishek = new User("abhi@gmail.com","Muffinlal")
console.log(abishek.password);
console.log(abishek.email);