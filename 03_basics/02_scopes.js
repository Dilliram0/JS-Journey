var c = 900; 
  

// Block scope
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner a:",a)
}

// console.log(a); // undefined
// console.log(b); // undefined
console.log(c); // 30


// Global scope
