// for of

// ["","",""];
// [{},{},{}];

const arr = [1,2,3,4,5]

for (const val of arr) {
    // console.log(val)    
}

const greetings = "Hello Nepal";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('NP',"Nepal")
map.set('AU',"Australia")
map.set('IN',"India")

// console.log(map);


for (const [key, value] of map) {
    // console.log(key,":-", value)
}

const myObject = {
    game1: "Pubg",
    game2: "Minecraft"
}

// for (const [key,value] of myObject) { // Not iterable
//     console.log(key , value)
// }