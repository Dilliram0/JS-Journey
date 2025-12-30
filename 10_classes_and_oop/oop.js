const user = {
    username:"Krishna",
    loginCount: 9,
    signedIn: true, 

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

        // return this
}

// new = constructor function => creates a new instance

const userOne = new User("Krishna",18,true);
const userTwo = new User("Radha", 9 , true);

console.log(userOne.constructor);
// console.log(userTwo);

function Vehicle(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

const auto = new Vehicle("auto","3 wheeler",1990)
const car = new Vehicle("car","4 wheeler",2010)
const truck = new Vehicle("truck","8 wheeler",1970)
const bike = new Vehicle("bike","2 wheeler",1930)

// console.table(auto,car,truck,bike);
console.log(car);
console.log(auto);
console.log(truck);
console.log(bike);

console.log(car instanceof Vehicle);
console.log(car instanceof Object);