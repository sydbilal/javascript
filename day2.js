

//ARITHMETIC OPERATORS

// let num = 5;
// console.log(num ** 3); // 5³ = 125 eponentiation
// num++; // increment
// console.log(num); // 6 


////////////////////////////////////////////


//COMPARISON OPERATORS

// console.log(10 == "10");  // true (loose comparison)
// console.log(10 === "10"); // false (strict comparison)
// console.log(5 > 3);       // true

////////////////////////////////////////////



//Logical Operators

// let age = 20;
// console.log(age > 18 && age < 25);  // true (Both conditions are true)
// console.log(age < 18 || age > 30);  // false (Neither condition is true)
// console.log(!(age > 18));           // false (Negating true)

////////////////////////////////////////////



//Ternary Operator

// let num = 10;
// let result = (num % 2 === 0) ? "Even" : "Odd";
// console.log(result);  // "Even"


////////////////////////////////////////////


//Nullish Coalescing OperatoR

// let name = null;
// console.log(name ?? "Guest");  // "Guest"

// let user = "Mustafa";
// console.log(user ?? "Guest");  // "Mustafa"


////////////////////////////////////////////

//IF-ELSE STATEMENT

// let age = 110;

// if (age < 18) {
//     console.log("You are a minor.");
// } else if (age < 65) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a senior citizen.");
// }


////////////////////////////////////////////


//SWITCH-CASE STATEMENTS

// let day = 3

// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;        
//     default:
//         console.log("Invalid Day")    
// }



////////////////////////////////////////////


// Check if a number is even or odd

// const prompt = require("prompt-sync")(); //package or requirement to use prompt
// let num = parseInt(prompt("Enter a number:"));
// if (num % 2 === 0) {
//     console.log(`${num} is Even`);
// } else {
//     console.log(`${num} is Odd`);
// }


////////////////////////////////////////////



// Age-based Discount System

// const prompt = require("prompt-sync")(); //package or requirement to use prompt
// let age = parseInt(prompt("Enter your age: "))

// if (age < 18){
//     discount = "50% Discount"

// } else if (age > 60) {
//     discount = "30 Discount"
// } else{
//     discount = "No Discount"
// }

// console.log(`You get ${discount}`)



////////////////////////////////////////////


//Perform Addition, Subtraction, Multiplication, Division based on user input (Calculator)

// const prompt = require("prompt-sync")(); //package or requirement to use prompt

// let num1 = parseFloat(prompt("Enter 1st number: "));
// let num2 = parseFloat(prompt("Enter 2nd number: "))
// let operator = prompt("Enter operator (+, - , *, /): ")

// let result;
// switch (operator){
//     case "+":
//         result = num1 + num2;
//         break;
//     case "-":
//         result = num1 - num2;
//         break;
//     case "*":
//         result = num1 * num2;
//         break;
//     case "/":
//         result = num1 / num2
//         break;
//     default:
//         result = "Invalid Operator"
        
// }

// console.log(`Result: ${result}`)