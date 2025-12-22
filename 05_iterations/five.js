// for each

const coding = ["js","python","ruby","java"];

// coding.forEach( function (val){
//     console.log(val)
// } )

// coding.forEach((val)=> {
//     console.log(val)
// })


// Interesting

// function printMe(val){
//     console.log(val)
// }

// coding.forEach(printMe);



// coding.forEach( (val,index,arr)=> {
//     console.log(val,index,arr);
// } )


const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
    languageName: "python",
    languageFileName: "py"
    },
    {
    languageName: "ruby",
    languageFileName: "rb"
    },
];

myCoding.forEach( (item) =>{
    console.log(item.languageName)
} )