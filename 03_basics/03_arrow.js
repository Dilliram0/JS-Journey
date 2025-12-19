const user = {
    username: "Abhisek",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }

}

// user.welcomeMsg();
// user.username = "Muffin";
// user.welcomeMsg();

// console.log(this)


// function chiya(){
//     let username = "Radha"
//     console.log(this.username) // undefined so that this function doesnt work on function
// }

// chiya();


// const chai = function(){
//     let username = "Radha"
//      console.log(this.username) // undefined
// }

// Arrow functions

// const chai = () => {
//     let username = "Radha"
//      console.log(this.username) // undefined
// }
// chai();

// Explicent return => using return

// const addTwo = (num1,num2) =>{
//     return num1 + num2;
// }


//Implicent return -> not using return

// const addTwo = (num1,num2) =>   num1 + num2;

const addTwo = (num1,num2) =>   (num1 + num2);

const myObj = () => ({username:"Shlok"});



console.log(addTwo(3,1));
console.log(myObj());


// const myArr = [1,2,3,4,5];

// myArr.forEach(()=>{

// })