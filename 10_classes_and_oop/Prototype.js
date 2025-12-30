let myName = "  Krishna    ";
let chai = " myChannel  "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
} 

String.prototype.toUpper = function(){
        console.log(`${this}`)
    console.log(`Upper case is ${this.toUpperCase()}`);
}

chai.truelength();
myName.truelength();
// myName.toUpper();
"    bdwdxbwiodndwu     ".truelength();


let myHeros = ['thor','spiderman'];


let heroPower = {
    thor: "Hammer",
    spiderman: "string",

    getSpiderPower: function(){
        console.log(`Spider Power is ${this.spiderman}`)
    }
}

Object.prototype.abhisek = function(){
    console.log(`Abhisek is present in every object`)
}

Array.prototype.heyBro = function(){
    console.log(`Hello sir`)
}

let testbruh = {
    name: "lol"
}

// functions strings and array can access Object prototype

// testbruh.abhisek();
// heroPower.abhisek();
// myHeros.abhisek();
// myName.abhisek();


// myHeros.heyBro();
// heroPower.heyBro(); // => error | Object Cant access array prototype


// Inheritance

const User = {
    username: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true,
}
const TeachingSupport = {
    isAvailable: false,
}
const TAsupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher:__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher);