function SetUsername(username){
    // complex DB calls
    this.username = username;
    console.log("called")
}

function createUser(username, email , password){

    SetUsername.call(this,username)
    
    this.email = email;
    this.password = password;

}

const UserOne = new createUser("muffin","my.com","123")

// const UserTwo = new createUser("muffinlal","muffin@123.com","Hackmeuncle")

console.log(UserOne);
// console.log(UserTwo);