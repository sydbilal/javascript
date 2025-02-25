//Creating an Object using Object Literals

// const person = {
//     name : "Mustafa",
//     age: 26,
//     greet: function (){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// person.greet()



//Using a Constructor Function

// function Person (name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log(`Hello, my name is ${this.name}`)
//     }
// }

// const user1 = new Person("Mustafa", 25)
// const user2 = new Person("Bilal", 21)

// user1.greet()
// user2.greet()



//Using ES6 Classes

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hello, My name is ${this.name}`)
//     }
// }

// const user2 = new Person ("Nadeem", 55)

// user2.greet()


//Advanced OOP Concepts in JavaScript

// Inheritance in JavaScript

// class Animal {
//     constructor(name){
//         this.name = name;
//     }

//     makeSound(){
//         console.log("Some generic Sound")
//     }
// }

// class Dog extends Animal{
//     constructor(name, breed){
//         super(name);
//         this.breed = breed;
//     }

//     makeSound(){
//         console.log("woof! woof!")
//     }
// }


// class Cat extends Animal{
//     constructor(name, breed){
//         super(name);
//         this.breed = breed;
//     }

//     makeSound(){
//         console.log("meow! meow!")
//     }
// }

// const myDog = new Dog("Buddy", "Golden Retriever")
// myDog.makeSound()

// const myCat = new Cat("Cherry", "PErsian Cat")
// myCat.makeSound()



// Abstraction in JavaScript

// class Vehicle {
//     constructor(brand){
//         if (this.constructor === Vehicle){
//             throw new Error ("Cannot instantiate abstract class")
//         }
//         this.brand = brand;
//     }

//     startEngine(){
//         throw new Error("Method 'startEngine()' must be implemented ")
//     }
// }

// class Car extends Vehicle {
//     startEngine(){
//         console.log(`${this.brand} engine started`)
//     }
// }

// const myCar = new Car ("Tesla")
// myCar.startEngine()