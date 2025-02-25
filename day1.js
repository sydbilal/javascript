
// console.log("start")

// setTimeout(
//     () => {
//         console.log("asynch code")
//     }, 2000
// )

// console.log("end")




// VARIABLES
// var x = 10
// let y = 20
// const z = 30

// x = 50 
// y = 60
// z = 70 ERROR CONST CANNOT BE REASSIGNED

// console.log(x)
// console.log(y)
// console.log(Z) ERROR




// DATATYPES

// let num = 100; // Number (Primitive)
// let str = "Hello"; // String (Primitive)
// let obj = { name: "Mustafa" }; // Object (Reference)

// console.log(num)
// console.log(str)
// console.log(obj)

// let arr = [1, 2, 3]; // Array (Reference)
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]



// TYPE CONVERSIONS

// console.log(Number("123"))
// console.log(parseInt("123.45"))
// console.log(String(true))
// console.log(Boolean(0))




//EXERCISE 1
// console.log(Number("42"))
// console.log(String(false))
// console.log(String(99.99))
// console.log(Boolean("0"))



//EXERCISE2

// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(a,b);



//MINI PROJECT (CONVERT FAHRENHEIT TO CELCIUS AND VISEVERSA)


//APPROACH 1

// let f = 90
// let c = 35

// Celcius = (f - 32) * 5/9
// Farenheit = (c * 9/5) + 32

// console.log("Celcius:", Celcius)
// console.log("Farenheit:", Farenheit)



//APPROACH 2

function convertTemperature(value, unit) {
    if (unit === "C") {
        return (value * 9/5) + 32 + "°F";
    } else if (unit === "F") {
        return ((value - 32) * 5/9).toFixed(2) + "°C";
    } else {
        return "Invalid unit!";
    }
}

console.log(convertTemperature(30, "C")); 
console.log(convertTemperature(86, "F"));

