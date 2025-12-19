var c = 900; 
  

// Block scope
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner a:",a)
}

// console.log(a); // undefined
// console.log(b); // undefined
// console.log(c); // 30




function one(){
    const username = "abhisek";

    function two(){
        const website = "youtube"
        // console.log(username); // works it can take value from upper scope
    }

    // console.log(website); // doesnt work it cant take value from block scope

    two()

}

one()


if (true) {     
    const username = "Krishna";
    if(username === "Krishna"){
        const website = "youtube";
        // console.log(website+username);
    }
    // console.log(website);
    
}

// console.log(username)


// ++++++++++ Interesting ++++++++++++++ //



console.log(addOne(5)); // can access before initialization 

function addOne(num){
    return num + 1;
}

// addTwo(5); // Cannot access before initialization


const addTwo = function(num){
    return num + 2;
}

