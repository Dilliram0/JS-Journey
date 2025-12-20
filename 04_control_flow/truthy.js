// const userEmail = "abhi@lol.com";
// const userEmail = ""; // Not work
// const userEmail = " "; // works
// const userEmail = []; 

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Didnt get email")
// }

// Falsy Values

// false , 0 , -0 , BigInt 0n ,"",null , undefined , NaN

// Truthy values

// "0" , 'false' , " ",[],{},function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

// const emptyObj = {};

// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty")
// }


// Nullish Coaelescing Operator (??):null undefined

let val1;
// val1 = 5 ?? 10; // => 5
// val1 = null ?? 10; // => 10
// val1 = undefined ?? 15 // => 15


// console.log(val1);


// Terniary Operator

// condition ? true : false;

const teaPrice = 40;
teaPrice >= 20 ? console.log("less than 40") : console.log("more than 40");

const num = 1;

num > 0 ? console.log("postive") : console.log("neg")