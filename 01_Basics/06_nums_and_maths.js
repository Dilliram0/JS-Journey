const score = 400;
// console.log(score);

const anotherScore = new Number(100);
// console.log(anotherScore);

// console.log(anotherScore.toString());
// console.log(anotherScore.toFixed(2));

const otherNum = 2333.89;
// console.log(otherNum.toPrecision(5));

const hundreds = 1000000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++ Maths ++++++++++++++ \\

// console.log(Math);
// console.log(Math.abs(-9));
// console.log(Math.round(6.499));
// console.log(Math.ceil(4.1)); // => 5
// console.log(Math.floor(4.6)); // => 4
// console.log(Math.min(9,6,4,2,3566,432));
// console.log(Math.max(3423,4354,534,5343453,123,2343,));

// console.log(Math.random()); // value ranges from 0 to 1
// console.log(Math.random()*10+1); // +1 is added to eliminate 0
// console.log(Math.floor(Math.random()*10+1)); // removes the decimal


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min +1)+ min));