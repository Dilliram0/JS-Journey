// for

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 6){
        // console.log("6 is the best number")
    }


    // console.log(element)
    
}

for (let i = 1; i <= 3; i++) {
    // console.log(`\n Outer loop value :${i} \n`)
   for (let j = 1; j <= 3; j++) {
    // console.log(`Inner loop value: ${j}`)
    // console.log(i + ' * ' + j + ' = ' + i*j );
   }
    
}

const myArray = ["flash","batman","ironman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
    
}


// Break and continue

for (let i = 0; i <= 20; i++) {
    if(i == 5){
        // console.log("5 is Detected")
        break;
    }
    // console.log(`Value of i is ${i}`)
}
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log("5 is Detected")
        continue;
    }
    console.log(`Value of i is ${i}`)
}