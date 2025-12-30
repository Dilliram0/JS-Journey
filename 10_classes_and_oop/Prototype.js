let myName = "  Krishna    ";
let chai = " myChannel  "

String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`)
} 

String.prototype.toUpper = function(){
    console.log(`Upper case is ${this.toUpperCase()}`);
}

// chai.truelength();
// myName.truelength();
// myName.toUpper();


let myHeros = ['thor','spiderman'];

let heroPower = {
    thor: "Hammer",
    spiderman: "string",

    getSpiderPower: function(){
        console.log(`Spider Power is ${this.spiderman}`)
    }
}

heroPower.abhisek();
