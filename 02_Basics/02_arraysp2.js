const marvelHeros = ["Spiderman","Ironman","thor"];
const dcHeros = ["Batman","Superman","flash"];

marvelHeros.push(dcHeros);

// console.log(marvelHeros);



// console.log(marvelHeros[3][1])

// const allHeros = marvelHeros.concat(dcHeros); // => combines the arrays 

// console.log(allHeros);

// const allNewHeros = [...marvelHeros,...dcHeros]; // => this is a better way to combine arrays
// console.log(allNewHeros);

// const bigArray = [1 , 2 , 3, [ 1, 4 , [ 8 , 4]]];

// const returnBigArray = bigArray.flat(Infinity); // => combines all arrays to a single array
// console.log(returnBigArray)


console.log(Array.isArray("Hello")) // => false

console.log(Array.isArray([1,2,3])) // => true

console.log(Array.from(123));  // => []
console.log(Array.from({name: "Hello"})); // => []
console.log(Array.from("Abhisek"));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
