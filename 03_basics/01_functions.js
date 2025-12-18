
function sayMyName() {
  console.log("K");
  console.log("a");
  console.log("n");
  console.log("h");
  console.log("a");
}

// sayMyName();

function addTwoNumbers (num1, num2){
  console.log(num1 + num2);
}
// addTwoNumbers(5,6); // 11
// addTwoNumbers(5,"6"); // 56
// addTwoNumbers(5,null); // 5
// addTwoNumbers(5,undefined); // NaN
// addTwoNumbers(5,true); // 6

function sumTwoNumbers (numb1, numb2){
  return(numb1+numb2);
  console.log("Not work") // Doesnt work after return
}

const result = sumTwoNumbers(9,11);
// console.log("Result: ",result);


function loginUserMessage(username = "Ram"){
  if(!username){ //=> if username is undefined
    console.log("Please Enter an username");
    return
  } 

  return`${username} Just Logged In...`
}

// const userOP  = loginUserMessage();
// console.log(userOP);



function calculateCartPrice(val1 , val2 , ...num1){ // Rest operator
  return num1;

}

// console.log(calculateCartPrice(200,300,400,900,1100));

const user = {
  username: "Abhisek",
  age: 19,
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}

// handleObject(user);


// handleObject({
//   username:"muffin",
//   age: 69
// })

const myArray = [1,3,5,7];

function returnArrayValue(getArray){
  return getArray[1];

}

console.log(returnArrayValue(myArray));