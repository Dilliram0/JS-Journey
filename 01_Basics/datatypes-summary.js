// Primitive

// 7 types: String,Number,Boolean,Bigint,null,undefined,Symbol

let userName = "Abhisek";

let score = 100;

let isLoggedIn = true;

let bigNumber = 734791374813749n;

let outsideTemp = null;

let userEmail; // let userEmail = undefined;

let userId = Symbol('123');
let anotherId = Symbol('123');
// console.log(userId === anotherId); //=> false

// Reference (Non Primitive)

// Array,Objects, Function

const heros = ["Spiderman","Batman","Ironman"];

let myObj = {
    name: "Abhisek",
    age: 33,
    address: "Nepal",
    isLoggedIn: false,
}

let myFunction = function(){
    // console.log("Hello world");
}

myFunction();


console.log(typeof bigNumber);
console.log(typeof heros); //=> object
console.log(typeof object);// => object
console.log(typeof myFunction); // function