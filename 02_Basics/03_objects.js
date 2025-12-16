// Singleton 
// Object.create 



// Object Literals

const mySym = Symbol("Key1");

const JsUser = {
    [mySym]: "mykey1", //special syntax for symbol
    name: "Abhisek",
    "full Name": "Lol",
    age: 17,
    location: "Nepal",
    email: "Krishna@vasudev.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email); 
// console.log(JsUser["email"]); // better way of coding
// console.log(JsUser["age"])
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "harekrishna@radha.com"; 

// Object.freeze(JsUser); // freezes the object

// JsUser.email = "Thiswontwork@lol.com"; // so this wont work

// console.log(JsUser);

// Functions in JS

JsUser.greet = function(){
    console.log("Hello JS User");
}

JsUser.greetTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // this.name is same as JsUser.name
}

console.log(JsUser.greet());
console.log(JsUser.greetTwo());