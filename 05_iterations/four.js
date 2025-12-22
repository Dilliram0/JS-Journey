// for in

const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","swift","pyth"];

for (const key in programming) {
    
    console.log(programming[key])
    
}


const map = new Map()
map.set('IN',"India")
map.set('NP',"Nepal")
map.set('AU',"Australia")
map.set('IN',"India")

for (const key in map) {
    console.log(key) // => Not iterable
}