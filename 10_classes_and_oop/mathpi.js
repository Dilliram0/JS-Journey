const descrip = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descrip)
// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)


const chai = {
    name: "ginger chai",
    price: 100,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai is not ready yet")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"price"))

Object.defineProperty(chai,"price",{
    writable:false,
    enumerable:false,
})

chai.price = 300;

console.log(Object.getOwnPropertyDescriptor(chai,"price"))


for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(` ${key}: ${value} `)

    }
}