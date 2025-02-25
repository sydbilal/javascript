// 1. Factorial of a Number

// function factorial (n){
//     if (n === 0) return 1 //base case to stop recursive calls at some point
//     return n * factorial(n-1) //recursive call
// }
// console.log(factorial(5))



// 2. Sum of Digits

// function sumOfDigits(n){
//     if (n ===0) return 0 // base case
//     return (n%10) + sumOfDigits(Math.floor(n/10)) // recursive call (mudolo operator returns last digit and Math.floor returns digits except last digit)
// }
// console.log(sumOfDigits(12345))



// 3. Fibonacci Series

// function fibonacci(n){
//     if (n<=1) return n // base cases
//     return fibonacci (n-1) + fibonacci (n-2) //recursive call
// }
// console.log(fibonacci(8))


// 4. Reversing a String

// function reverseString(str){
//     if (str.length===0) return ""
//     return str[str.length - 1] + reverseString(str.slice(0, -1))
// }
// console.log(reverseString("bilal"))


// 5. Power Function

// function power (x,n){
//     if (n === 0) return 1
//     return x * power(x, n-1)
// }
// console.log(power(2, 3))


// 6. Count occurences of a character in a string

// function countChar(str, char){
//     if (str.length === 0) return 0
//     return (str[0] === char ? 1 : 0) + countChar(str.slice(1), char)
// }
// console.log(countChar("Hello world", "o"))


// 7. Find the Sum of an array

