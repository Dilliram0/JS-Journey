// Switch case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3;

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("Arpil")
        break;

    default:
        console.log("Press Numbers from 1 to 4")
        break;
}

// if break is not written every code after it runs

const monthSTR = "march"

switch (monthSTR) {
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("February")
        break;
    case "march":
        console.log("March")
        break;
    case "april":
        console.log("Arpil")
        break;

    default:
        console.log("Please enter a month")
        break;
}
