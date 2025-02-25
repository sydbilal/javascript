// FUNCTION DECLAERATION

// function greet (name){
//     return `Hello ${name}!`
// }
// console.log(greet("Mustafa"))


/////////////////////////////////////////////////////////


//FUNCTION EXPRESSION

// const greet = function (name){
//     return `Hello, ${name}`
// }
// console.log(greet("Mustafa"))


/////////////////////////////////////////////////////////


//ARROW FUNCTIONS


//syntax

// const add = (a, b) => a+b;
// console.log(add(5, 3))




//single-line (implicit return)

// const square = num => num * num;
// console.log(square(4))



//multi-line (explicit return required)

// const multiply = (a, b) => {
//     return a*b
// }

// console.log(multiply(4, 2))




//Returning an object (wrap in parenthesis)

// const person = (name, age) => ({name, age})
// console.log(person("Mustafa", 23))


////////////////////////////////////////////////////////////////


//THIS KEYWORD

//regular function

// const person = {
//     name: "Mustafa",
//     age: 22,
//     profession: "developer",
//     greet:function (){
//         console.log(`Hello my name is ${this.name}`)
//         console.log(`Hello my age is ${this.age}`)
//         console.log(`Hello my profession is ${this.profession}`)
//     }
// }
// person.greet()



///////////////////////////////////////////////////////////////////////

//LEXICAL SCOPE

// function outer(){
//     let outerVar = "i am Outside" //Can be accessed

//     function inner() {
//         let innerVar = "I am inside"       
//         console.log(outerVar)
//     }
//     inner()
//     console.log(innerVar) //Error (innerVar is not accessible here)
// }
// outer()


/////////////////////////////////////////////////////////////////////

//CLOSURES

// function counter (){
//     let count = 0
//     return function(){
//         count ++
//         console.log(count)
//     }
// }

// const increment = counter()
// increment()
// increment()
// increment()


////////////////////////////////////////////////////////////////

//EXERCISES

//FACTORIAL FUNCTION (RECURSION)

// function factorial (n){
//     if (n===0) return 1
//     return n * factorial(n-1)
// }
// console.log(factorial(25))



//REVERSE A STRING

// function reverseString(str){
//     return str.split("").reverse().join("")
// }
// console.log(reverseString("Bilal"))



//REVERSE A STRING using Recursion

// function reverseStringRecursive(str){
//     if (str==="") return ""
//     return reverseStringRecursive(str.slice(1)) + str[0]
// }
// console.log(reverseStringRecursive("Mustafa"))


// MINI PROJECT
//TIP CALCULATOR

// const prompt = require("prompt-sync")(); //package or requirement to use prompt

// function calculateTip(bill, tipPercentage){
//     let tip = bill * (tipPercentage/100)
//     let total = bill + tip
//     return `Bill: $${bill}, Tip: $${tip}, Total: $${total}`
// }

// console.log(calculateTip(100, 15))



////////////////////////////////////////////////////////

// call() (Arguments are passed as strings or int)

// function greet (greeting){
//     console.log(`${greeting}, I am ${this.name} `)
// }
// const person = {name: "Mustafa"}
// greet.call(person, "Hello")



// apply() (same as call but arguments are passed as an array)

// function greet (greeting){
//     console.log(`${greeting}, I am ${this.name} `)
// }
// const person = {name: "Mustafa"}
// greet.apply(person, ["Hi"])





//bind()

// function greet (greeting){
//     console.log(`${greeting}, I am ${this.name} `)
// }
// const person = {name: "Mustafa"}
// const greetMustafa = greet.bind(person, "Hey");
// greetMustafa(); // "Hey, I am Mustafa"

