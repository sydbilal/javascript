//Reverse a Number

// function reverseNumber(n){
//     let rev = 0
//     while (n>0) {
//         let lastDigit = n%10 //Extract last digit
//         rev = rev * 10 + lastDigit // Add Last digit at correct place
//         n = Math.floor(n/10) // Remove Last digit
//     }
//     return rev
// }
// console.log(reverseNumber(12345))
// console.log(reverseNumber(54321))



//Sum of Digits Until Single Digit
//Given a number N, repeatedly sum its digits until the result is a single digit.

// function sumOfDigits (n){
//     while(n >= 10){ //continue untill n is a single digit
//         let sum = 0
//         while(n>0){
//             sum += n%10 //extract last digit and add to sum
//             n = Math.floor(n/10) //removes last digit from n
//         }
//         n = sum //update n to the sum of its digits
//     }
//     return n
// }
// console.log(sumOfDigits(987));  // Output: 6 (9+8+7 = 24 → 2+4 = 6)
// console.log(sumOfDigits(1234)); // Output: 1 (1+2+3+4 = 10 → 1+0 = 1)
// console.log(sumOfDigits(123456789)); // Output: 1 (1+2+3+4 = 10 → 1+0 = 1)



//Prime Number in a Range (1 to n)

// function isPrime(num){ 
//     if (num<2) return false // 0 and 1 are not prime
//     for (let i = 2; i * i <= num; i++){ // check divisiility up to sqrt(num)
//         if (num % i === 0) return false //if divisible not prime
//     }
//     return true
// }

// function primeNumbers(n){
//     let primes = []
//     for (let i = 2; i <= n; i++){
//         if (isPrime(i)) primes.push(i)
//     }
// return primes
// }



//Fibonacci Series (Without Recursion)

// function fibonacci(n){
//     let fib = [0, 1] // First two terms

//     for (let i = 2; i<n; i++){
//         fib[i] = fib[i-1] + fib[i-2] // Sum of previous two terms
//     }
//     return fib.slice(0, n); // Return only the first n terms

// }
// console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


//Check Armstrong Number

//Print Numbers in Spiral Order (Square Matrix)

//Find Missing Number in an Array

//Longest Consecutive Sequence in an Array

//Generate Pascal's Triangle (Row by Row)

