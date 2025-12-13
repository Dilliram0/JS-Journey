const accountId = 19231
let accountEmail = "Abhi@gmail.com";
var accountPassword = "abhi4599";
accountCity = "Chitwan";
let accountState;

// accountId = 7617; // Not allowed bcuz of Const

console.log(accountId);

accountState = "Bagmati";

accountEmail = "hacked@lol.com";
accountPassword = "Hacked123";
accountCity = "CyberCafe";


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/