// FOR LOOP
// PRINT NUMBERS FROM 1 TO 10

// for (let i = 1 ; i<=10 ; i++){
//     console.log(i)
// }

// print even numbers 1 to 10

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {  // Check if number is even
        console.log(i)
    }
}


/////////////////////////////////////



//WHILE LOOP
//PRINT NUMBERS FROM 1 TO 5

// let i = 1

// while (i<=5){
//     console.log(i)
//     i++
// }



/////////////////////////////////////


//DO-WHILE LOOP
//RUNS ATLEAST ONCE

// let i = 6 // even though loop starts at greater than condition, loop runs once before checking condition
// do {
//     console.log(i)
//     i++
// } while (i<=5)



/////////////////////////////////////



// BREAK STATEMENT

// for (let i = 1; i<=10; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(i)
// }



/////////////////////////////////////



//CONTINUE STATEMENT

// for ( let i = 1; i <= 10 ; i++){
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// }


/////////////////////////////////////



//LLOOPING THROUGH ARRAYS

//using for loop

// let fruits = ["banana", "apple", "cherry"]

// for (let i=0 ; i< fruits.length ; i++){
//     console.log(fruits[i])
// }



//using for...of loop

// let fruits = ["banana", "apple", "cherry"]

// for(let frt of fruits){
//     console.log(frt)
// }



/////////////////////////////////////


//LOOPING THROUGH OBJECTS
//using for...in

// let person = {name: "Mustafa", age: 25, job: "developer"}

// for (let key in person){
//     console.log(`${key}: ${person[key]}`)
// }



//////////////////////////////////////////////////////



//EXERCISES

//Print numbers from 1 to 100 skipping multiples of 5

// for (let num = 1; num<=100; num++){
//     if(num%5 === 0){
//         continue;
//     }
//     console.log(num)
// }



//Find the sum of even numbers between 1-50

// let sum = 0

// for (num = 1; num<=50; num++){
//     if (num % 2 === 0){
//         sum += num
//     }
// }

// console.log("Sum of even numbers: ", sum)



//////////////////////////////////////////////////////


//MINI PROJECTS

//NUMBER GUESSING GAME (The user will guess a number between 1-10, and the program will tell them if they are correct or need to try again.)


// const prompt = require("prompt-sync")(); //package or requirement to use prompt
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess;
// do {
//     guess = parseInt(prompt("Guess a number between 1-10:"));

//     if (guess > secretNumber) {
//         console.log("Too high! Try again.");
//     } else if (guess < secretNumber) {
//         console.log("Too low! Try again.");
//     } else {
//         console.log("🎉 Congratulations! You guessed the right number.");
//     }
// } while (guess !== secretNumber);





// FIZZBUZZ PROGRAM
//Print numbers from 1-100
// If a number is divisible by 3, print "Fizz"
// If a number is divisible by 5, print "Buzz"
// If divisible by both 3 & 5, print "FizzBuzz"

// for(i = 1; i<=100; i++){
//     if (i%3 === 0 && i%5 ===0){
//         console.log("FizzBuzz")
//     }else if (i%5 ===0) {
//         console.log("buzz")
//     }else if (i%3 ===0) {
//         console.log("fizz")
//     }else{
//         console.log(i)
//     }
// }
