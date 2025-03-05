//Array Problems

//Contains Duplicate

// function containsDuplicate(nums){
//     let numSet = new Set()
//     for (let num of nums){
//         if (numSet.has(num)) return true
//         numSet.add(num)
//     }
//     return false
// }

// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4]))

// Valid Anagram

// function isAnagram(s, t){
//     if (s.length !== t.length) return false

//     let count = {}

//     for (let char of s){
//         count [char] = (count[char] || 0) + 1
//     }

//     for (let char of t){
//         if (!count[char]) return false
//         count [char]--
//     }

//     return true
// }

// console.log(isAnagram("anagram", "nagaram"))
// console.log(isAnagram("rat", "cat"))
// console.log(isAnagram("bilal", "lalib"))

//TwoSum

// function twoSum (nums, target){
//     for (let i = 0; i<nums.length; i++){
//         for (let j = i+1 ;j<nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
//     return []
// }

// console.log(twoSum([2,7,11,15], 9)); // [0,1]
// console.log(twoSum([3,2,4], 6)); // [1,2]

//Object Problems

// Count Characters in a String

// function charCount(str){
//     let count = {}

//     for (let char of str){
//         count[char] = (count[char] || 0) + 1
//     }
//     return count
// }

// console.log(charCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }

// function containsDuplicate(nums){
//     let numSet = new Set()
//     for (let num of nums){
//         if (numSet.has(num)) return true
//         numSet.add(num)
//     }
//     return false
// }

// console.log(containsDuplicate([1,2,3,1]))
// console.log(containsDuplicate([1,2,3,4]))



// function numFound(arr, num) {
//   for (i of arr) {
//     if (i === num) {
//       return i;
//     }
//   }
// }

// console.log(numFound([1, 2, 3, 4, 5], 5));



// 4 input = [1,2,3,9,10,17,18] output = [2,10,18] evennumber

// function evenNumber(arr){
//     let set = []
//     for(i in arr){
//         if(arr[i] % 2 === 0){
//             set.push(arr[i])
//         }
//     }
//     return set
// }

// console.log(evenNumber([1,2,3,9,10,17,18]))




// 1 removeDuplicates input = [1,1,2,3,4] output = [2,3,4] 

// function RemoveDuplicates(arr){
//     let filteredArr = []
//     for (let i of arr){
//         if (!filteredArr.includes(i)){
//             filteredArr.push(i)
            
//         } else{
//             console.log("Duplicate", i)
//             // filteredArr.pop(i)
//         }
//     }
//     return filteredArr

// }
// console.log(RemoveDuplicates([1,1,2, 2,4,67,7,8,9,9,8,7,6,5,4,10,11,10,8,3,4]))



// 3 moveZeros input = [0,1,0,3,12] output = [1,3,12,0,0]

// function removeZeros(arr){
//     let filteredArr = []
//     let numArr = []
//     for (let i of arr){
//         if (i === 0){
//             filteredArr.push(i)
//         }else{
//             numArr.push(i)
//         }
//     }
//     return numArr.concat(filteredArr)
// }

// console.log(removeZeros([0,1,0,3,12]))



// function moveZeros(arr) {
//     let insertPos = 0; // Position to insert non-zero elements

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             // Swap non-zero element with the insert position
//             [arr[i], arr[insertPos]] = [arr[insertPos], arr[i]];
//             insertPos++; // Move insert position forward
//         }
//     }
    
//     return arr;
// }

// console.log(moveZeros([0, 1, 0, 3, 12]));





// 2 plusOne input = [1,2,3] output = [1,2,4]

// function plusOne(arr){
//     arr[arr.length-1]++
//     return arr
// }

// console.log(plusOne([1,2,3]))



// 5 find largest number from nested array input = [[1,4], [58,8], [225,78]] output = 225

function largestNumber(arr){
    let max = 0

    for (let subArr of arr){
        for (let i of subArr){
            if (i>max){
                max = i
            }
        }
    }
    return max
}

console.log(largestNumber([[1,4], [58,8], [225,78]]))