const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls , crypotgraphy , Networks

  setTimeout(function () {
    resolve();
    console.log("async task is complete");
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("User ko Data");
    resolve([
      { username: "Bhide", age: 47 },
      { username: "Jethalal", age: 47 },
    ]);
  }, 1000);
});

PromiseThree.then(function (userData) {
  console.log(userData);
});

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Krishna", jaap: 108 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

PromiseFour
.then(function (data) {
  console.log(data);
  return data.username;
})
.then((dataValue) => {
  console.log(dataValue);
});

PromiseFour
.catch((error) => {
  console.log(error);
})
.finally(()=>{
    console.log('Promise is either rejected or resolved')
})


const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Radha Radha", jaap: 108 });
    } else {
      reject("Error: Js went wrong");
    }
  }, 1000);
})

async function consumePromiseFive(){
    try {
    const response =  await PromiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log(error)
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((response)=>{
    console.log(response);
})
.catch((error)=> {
    console.log(error)
})