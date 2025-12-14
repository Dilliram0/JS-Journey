let name = "Abhisek";
let repoCount = 12;

// console.log(name.toUpperCase());

// console.log ( name + repoCount + " Value"); => old and bad way of coding

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // New and ideal way of coding


const gameName = new String('Minecraft');

// console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

let newGame = gameName.substring(0,4);
console.log(newGame);

let anotherGame = gameName.slice(-9,3);
console.log(anotherGame);

const newStringOne = "    radha   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // => trims the useless spaces  => mostly used for forms

const url = "www.abhisekrocks339@lol.com";
console.log(url.replace('339','ok'));
 
console.log(url.includes('rocks'));

const str = "hi my name is valu";
console.log(str.split());
