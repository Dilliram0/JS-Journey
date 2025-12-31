// ES6

// class User {
//     constructor(username,email,password){  
//         this.username = username;
//         this.email = email;
//         this.password = password;

//     }

//     encryptPassword(){
//         console.log(`${this.password}abc789`);
//     }

//     changeUsername(){
//         console.log(`${this.username.toUpperCase()}`)
//     }

// }

// const mukesh = new User("Mukesh","Mukes@gmail.com","bruh");
// mukesh.encryptPassword();
// mukesh.changeUsername()
// console.log(mukesh);



// behind the scenes

function User(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    console.log(`${this.password}abc7799`)
}

User.prototype.changeUsername = function(){
    console.log(`${this.username.toUpperCase()}`)
}

const thugesh = new User("Thugesh","nice@lol.com","jpt");
thugesh.encryptPassword()
thugesh.changeUsername()