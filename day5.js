//ARRAY AND METHODS



//push() {Adds element to last of array}
// let fruits = ["apple", "banana", "watermelon"];
// fruits.push("grape")
// console.log(fruits)


//pop() {removes element from last of array and stores it in variable}
// let fruits = ["apple", "banana", "watermelon"];
// let lastFruit = fruits.pop()
// console.log(lastFruit)
// console.log(fruits)


//shift() {removes first element of array and stores it in variable}
// let cars = ["red car", "yellow car", "blue car"]
// let firstCar = cars.shift()
// console.log(cars)
// console.log(firstCar)


//unshift() {Adds to first index in the array}
// let cars = ["red car", "yellow car", "blue car"]
// cars.unshift("black car")
// console.log(cars)


//splice()
// let numbers = [1, 2, 3, 4, 5];

// // Remove 2 elements from index 2
// numbers.splice(2, 2);
// console.log(numbers); // [1, 2, 5]

// // Add elements at index 1
// numbers.splice(1, 0, 10, 20);
// console.log(numbers); // [1, 10, 20, 2, 5]

// // Replace elements at index 3
// numbers.splice(3, 1, 99);
// console.log(numbers); // [1, 10, 20, 99, 5]



//slice()
// let letters = ["A", "B", "C", "D", "E"];
// let slicedLetters = letters.slice(1, 4);
// console.log(slicedLetters); // ["B", "C", "D"]
// console.log(letters); // ["A", "B", "C", "D", "E"] (original unchanged)



//forEach()
// let colors = ["red", "green", "blue"];

// colors.forEach((color, index) => {
//   console.log(`Index ${index}: ${color}`);
// });


//map()

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]


//filter()

// let ages = [15, 22, 18, 30, 10];
// let adults = ages.filter(age => age >= 18);
// console.log(adults); // [22, 18, 30]



//reduce()

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 15




////////////////////////////////////////////////////////

//EXERCISES

//FIND THE LARGEST NUMBER IN AN ARRAY
// function findMax(arr){
//     return Math.max(...arr)
// }
// console.log(findMax([10, 5, 20, 8])); // Output: 20

/////////////////////

// function findMaxLoop(arr){
//     let max = arr[0]
//     for (let i = 1; i<arr.length; i++){
//         if (arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(findMaxLoop([10, 5, 20, 8])); // Output: 20

/////////////////////////////////


//REMOVE DUPLICATES FROM AN ARRAY
// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
//   }
  
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

//////////
//HASHTABLES
function removeDuplicates(arr) {
    let unique = {};
    return arr.filter(item => !unique[item] && (unique[item] = true));
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
  



  



///////////////////////////////////////////////////////


//MINI-PROJECT
//TO-DO-LIST (BASIC VERSION) (ARRAYS AND METHODS)
// let todos = []

// function addTask(task){
//     todos.push(task);
//     console.log(`Added: ${task}`)
// }

// function removeTask(index){
//     if(index>=0 && index<todos.length){
//         console.log(`Removed: ${todos.splice(index,1)}`)
//     }else{
//         console.log("Invalid index")
//     }
// }

// function showTasks(){
//     console.log("To-Do-List:")
//     todos.forEach((task, index) => console.log(`${index}: ${task}`))
// }

// addTask("Learn JavaScript");
// addTask("Practice DSA");
// showTasks();
// removeTask(0);
// showTasks();

////////////////////////////////////////////////////////

//Sum of array 
// function sumArray(arr){
//     return arr.reduce((sum, num) => sum+num, 0)
// }

////////////////////////////////////////////////////////





