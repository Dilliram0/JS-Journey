// Dates

// let myDate = new Date();
// console.log(myDate.toString()); // => Mon Dec 15 2025 09:08:32 GMT+0000
// console.log(myDate.toLocaleString()); // => 12/15/2025, 9:08:54 AM
// console.log(myDate.toLocaleDateString()); // => 12/15/2025
// console.log(myDate.toLocaleTimeString()); // => 9:12:20 AM

// console.log(typeof myDate); //=> Object

// let myCreatedDate = new Date(2025,11,29,); // => array
// let myCreatedDate = new Date(2025,11,29,4,1);
// let myCreatedDate = new Date("2025-06-22"); // => string
// let myCreatedDate = new Date("2082-08-29");
let myCreatedDate = new Date("08-23-2063");

// console.log(myCreatedDate.toDateString());



let myTimeStamp = Date.now();

// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/31536000000));// => 55 years

const newDate = new Date()
// let date = console.log(newDate.getDate());
// let day = console.log(newDate.getDay()+1);
// let month = console.log(newDate.getMonth()+1);

// console.log(`Today's Date is ${date} where day is ${day} and the month is ${month}`);

let dateObj = newDate.toLocaleString('default',{
    weekday: "long",
    year: "numeric",
});

console.log(dateObj);