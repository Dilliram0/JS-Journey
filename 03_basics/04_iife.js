// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon necessary 

( (dbName) => {
    console.log(`${dbName} DB Connected`)
})("Mongo");