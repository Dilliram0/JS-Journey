//used rarely


const User = {
    _email: "muffin@bruh.com",
    _password: "pass123",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }

}

const mukesh = Object.create(User);
console.log(mukesh.email)

Object.defineProperty(User,'email',{
    writable:false,
})

mukesh.email = "mylord@123.com";
console.log(mukesh.email); // Wont change

