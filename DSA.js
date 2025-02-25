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
