// Arrays

// const myArr = [0,1,2,3,4,5,true,"Abhisek"];
// const myHeros = ["Spiderman","Doraemon","Batman"];

// const myArr2 = new Array(1,2,"lol"); 


// console.log(myArr[5]);
// console.log(myArr2);

// Array Methods

const newArr = [0,1,2,3,4,5];

// newArr.push(69); // => adds elements at the end
// newArr.push(7);
// newArr.pop(); // => removes the last element

// newArr.unshift(101) // => adds element at start
// newArr.shift(); // => removes the first element

// console.log(newArr.includes(1));
// console.log(newArr.indexOf(99));//=> gives -1 if doesnt exist
// console.log(newArr.indexOf(3));

// const newArr1 = newArr.join(); //=> converts the array to string
// console.log(typeof newArr1); 


// console.log(newArr1)
// console.log(newArr);


// SLice and Splice 

console.log("A ",newArr);

const arr1 = newArr.slice(1,3);
console.log(arr1); // => [1,2]
console.log("B ",newArr) // => doesnt change the original array 


const arr2 = newArr.splice(1,3);
console.log(arr2); // => [1,2,3]

console.log("C ",newArr) // Splice changes the original array
// and also includes the range 