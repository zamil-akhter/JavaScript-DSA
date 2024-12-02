// ! https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2
// ! Step 3 : Solve Problems on Arrays [Easy -> Medium -> Hard]
// ! Lec 1: Easy

// ! 1. Find the Largest element in an array

// let arr = [2,5,1,3,0];
// // output = 5

// let largestNumber = arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>largestNumber){
//         largestNumber = arr[i]
//     }
// }
// console.log(largestNumber);

// ! 2. Find Second Smallest and Second Largest Element in an array without sorting

// const arr = [9,8,5,1,3];
// let largestNumber = -Infinity;
// let secondLargestNumber = -Infinity;
// let smallestNumber = Infinity;
// let secondSmallestNumber = Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>largestNumber){
//         secondLargestNumber = largestNumber
//         largestNumber = arr[i];
//     }else if(arr[i]> secondLargestNumber && arr[i] < largestNumber){
//         secondLargestNumber = arr[i]
//     }

//     if(arr[i]<smallestNumber){
//         secondSmallestNumber = smallestNumber
//         smallestNumber = arr[i]
//     } else if(arr[i] < secondSmallestNumber && arr[i] > smallestNumber){
//         secondSmallestNumber = arr[i]
//     }
// }
// console.log('secondLargestNumber  ---->', secondLargestNumber);
// console.log('secondSmallestNumber ---->', secondSmallestNumber);

// ! 3. Check if an Array is Sorted

// var checkSorted = function (nums) {
//    let sorted = true;
//    for (let i = 0; i < nums.length-1; i++) {
//        if (nums[i] > nums[i + 1]) {
//            sorted = false;
//            break;
//        }
//     }
//     return sorted
// };
// let arr = [1,2,3,14,5,6];
// console.log(checkSorted(arr))

// ! 4. Remove Duplicates in-place from Sorted Array
// ! Input:
// ! arr[1,1,2,2,2,3,3]
// ! Output:
// ! arr[1,2,3]

// let arr = [1,1,2,2,2,2,2,2,2,3,3];
// let index = 1;
// for(let i=1; i<arr.length; i++){
//     if(arr[i] === arr[i-1]){
//         arr.splice(i, 1);
//         i--;
//     }
// }
// console.log(arr);

// ! 4. Remove Duplicates in-place from Sorted Array
// ! ----------- Example 1 ------------
// ! Input:  [1,1,2,2,2,3,3]
// ! Output: [1,2,3,_,_,_,_]

// ! ----------- Example 2 ------------
// ! Input:  [1,1,1,2,2,3,3,3,3,4,4]
// ! Output: [1,2,3,4,_,_,_,_,_,_,_]

// const removeDuplicate = (a) => {
//     let i = 0;
//     for(let j=1; j<a.length; j++){
//         if(a[j] !== a[i]){
//             a[i+1] = a[j];
//             i++;
//         }
//     }
//     return a;
// }
// let a = [1,1,1,2,2,3,3,3,3,4,4];
// console.log(removeDuplicate(a));

// ! 5. Left Rotate the Array by One
// ! Input:  [1,2,3,4,5]
// ! Output: [2,3,4,5,1]

// function leftRotateByOne(arr) {
//   let temp = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i-1] = arr[i];
//   }
//   arr[arr.length-1] = temp;
//   return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(leftRotateByOne(arr));

// ! 6. Rotate array by K elements
// ! Input:  [1, 2, 3, 4, 5, 6, 7] ,  k=2
// ! Output: [6, 7, 1, 2, 3, 4, 5]

// const rotateArray = (a,k) => {
//   k = k%a.length;
//   for(let i=0; i<a.length; i++){
//     if(k > 0){
//         let p = a.pop()
//         a.unshift(p);
//       k--;
//     }
//   }
//   return a
// }

const rotateArray = (a,k) => {
    k = k % a.length;
  return a.slice(-k).concat(a.slice(0, -k))
}

let a = [1,2,3,4,5];
k = 9
console.log(rotateArray(a,k));

// ! 7. Move all Zeros to the end of the array
// ! Input:  [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]
// ! Output: [1 ,2 ,3 ,4 ,1 ,0 ,0 ,0]

// let a = [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]
// for(let i=a.length-1; i>=0; i--){
//   if(a[i] === 0 ){
//     a.splice(i,1)
//     a.push(0)
//   }
// }
// console.log(a);




// ! Flatten Array
// ! Input  : [1, [2, [3, 4], 5]]
// ! Output : [ 1, 2, 3, 4, 5 ]

// function flattenArray(arr) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         result.push(...flattenArray(arr[i]))
//       } else {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }

//   const array = [1, [2, [3, 4], 5]];
//   console.log(flattenArray(array));



// ! merge two shorted array without extra space
// try {
    
//     const mergeSortedArray = (a,b) =>{
//         for(let i=0; i<a.length; i++){
//             if(a[i]>b[0]){
//                 a.splice(i, 0, b[0]);
//                 b.shift();
//             }
//         }
//         return a;
//     }
//     let a = [1,4,8,10]
//     let b = [2,3,9]
//     console.log(mergeSortedArray(a,b))
// } catch (error) {
//     console.log('error --------->>>>> ',error);
// }


// ! missing number and repeating number
// // let a = [3,1,2,5,3]
// let a = [3,1,2,5,4,6,7,6]
// let missingNumber ;
// let numberObject = {};
// for(let i=0; i<a.length; i++){
//     if(!a.includes(i+1)){
//         missingNumber = i+1
//     }
//     if(numberObject[a[i]]){
//         ++numberObject[a[i]]
//     }else{
//         numberObject[a[i]] = 1
//     }
// }

// console.log('Missing Number  ---->>', missingNumber);
// for(let i in numberObject){
//     if(numberObject[i] === 2){
//         console.log('Repeating Number --->>', i);
//         break;
//     }
// }

// ! rotate matrix

// let a = [[1,2,3],[4,5,6],[7,8,9]]
// // Output: [[7,4,1],[8,5,2],[9,6,3]]
// for(let i=0; i<a.length; i++){
//     // console.log(i);
//     for(let j=0; j<a[i].length; j++){
//         console.log(a[i][j]);
//     }
// }

// const a = ['a', 'b', 'c', 'a', 'b', 'd', 'a', 'b', 'c', 'd', 'd', 'e'];

// ! Longest sub Array in array

// const findLongestSubArray = (arr) => {
//     let longestSubArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         let temp = [];
//         let tempSubArray = [];

//         for (let j = i; j < arr.length; j++) {
//             if (!temp.includes(arr[j])) {
//                 temp.push(arr[j]);
//                 tempSubArray.push(arr[j]);
//             } else {
//                 break;
//             }
//         }

//         if (tempSubArray.length > longestSubArray.length) {
//             longestSubArray = tempSubArray;
//         }
//     }
//     return longestSubArray;
// };

// const a = ['a', 'b', 'c', 'a', 'b', 'd', 'a', 'b', 'c', 'd', 'd', 'e'];
// console.log(findLongestSubArray(a));

// ! Reverse Array
// ! Input  ----->> [ 1, 2, 3, 4, 5, 6 ]
// ! Output ----->> [ 6, 5, 4, 3, 2, 1 ]

// function reverseArray(abc){
//   start = 0;
//   end = abc.length - 1;

//   while (start <= end) {
//     let temp = abc[start];
//     abc[start] = abc[end];
//     abc[end] = temp;
//     start++;
//     end--;
//   }
//   return abc;
// }

// abc = [1, 2, 3, 4, 5];

// console.log(reverseArray(abc));

// ! longest unique sub array from an array

// const findSub = (a) => {
//   let longestSubArray = [];
//   for (let i = 0; i < a.length; i++) {
//     let tempSubArray = [];
//     for (let j = i; j < a.length; j++) {
//       if (!tempSubArray.includes(a[j])) {
//         tempSubArray.push(a[j]);
//       } else {
//         break;
//       }
//     }
//     if (tempSubArray.length > longestSubArray.length) {
//       longestSubArray = tempSubArray;
//     }
//   }
//   return longestSubArray;
// };

// // ! multiple test cases
// let a = ["a", "b", "c", "a", "b", "d", "a", "b", "c", "d", "d", "e"];
// let a1 = ["a", "b", "c", "a", "b", "d", "a", "b", "c", "d", "d", "e"];
// let a2 = ["a", "a", "a", "a"];
// let a3 = ["a", "b", "c", "d", "e"];
// let a4 = ["a", "b", "c", "a", "b", "b", "b", "a", "d", "e"];
// let a5 = ["x", "y", "z", "x", "y", "z"];
// let a6 = ["p", "q", "r", "s", "t", "u", "v"];
// let a7 = ["a","b","c","d","a","b","c","d","e","f","g","h","i","j","k",];
// let a8 = ["1", "2", "3", "2", "1", "4", "5", "1", "2", "3", "4", "5", "6"];
// let a9 = [];
// let a10 = ["a"];

// console.log(findSub(a));  // [ 'c', 'a', 'b', 'd' ]
// console.log(findSub(a1)); // [ 'c', 'a', 'b', 'd' ]
// console.log(findSub(a2)); // ["a"]
// console.log(findSub(a3)); // ["a", "b", "c", "d", "e"]
// console.log(findSub(a4)); // [ 'b', 'a', 'd', 'e' ]
// console.log(findSub(a5)); // ["x", "y", "z"]
// console.log(findSub(a6)); // ["p", "q", "r", "s", "t", "u", "v"]
// console.log(findSub(a7)); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]
// console.log(findSub(a8)); // ["1", "2", "3", "4", "5", "6"]
// console.log(findSub(a9)); // []
// console.log(findSub(a10)); // ["a"]

// ! Two consecutive Occurance of 19

// const checkOccuranceOfNineteen = () => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1] && arr[i] === 19) {
//       return true;
//     }
//   }
//   return false;
// };
// const arr = [12, 23, 19, 19, 5, 6, 19];
// console.log(checkOccuranceOfNineteen(arr));

// ! four consecutive number

// function checkArray(arr1) {
//   let pattern = [arr1[0], arr1[1], arr1[2], arr1[3]];

//   if (arr1.length % 4 !== 0) {
//     return false;
//   }

//   for (let i = 1; i < pattern.length; i++) {
//     if (pattern[i] - pattern[i - 1] !== 1) {
//       return false;
//     }
//   }

//   for (let i = 0; i < arr1.length; i += 4) {
//     for (let j = 0; j < 4; j++) {
//       if (arr1[i + j] !== pattern[j]) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// console.log(checkArray([4,5,6,7,4,5,6,7])); // True
// console.log(checkArray([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4])); // Output: True
// console.log(checkArray([1,2, 3, 4, 1,2,3,4])); // Output: True
// console.log(checkArray([1, 2, 3, 3, 1, 2, 3, 3, 1, 2, 3, 3])); // Output: False
// console.log(checkArray([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3])); // Output: False

// ! Validate Parenthesis

// const isValid = (s) => {
//   const stack = [];

//   const bracketMap = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   for (let i of s) {
//     if (i === "(" || i === "{" || i === "[") {
//       stack.push(i);
//     } else if (stack.length === 0 || stack.pop() !== bracketMap[i]) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };

// const passingArray = ["[", "{", "}", "]"];
// console.log(isValid(passingArray));

// ! check unique Positive Dominant

// const isPositiveDominant = (a) => {
//   let uniqueArray = [];
//   for (let i = 0; i < a.length; i++) {
//     if (!uniqueArray.includes(a[i])) {
//       uniqueArray.push(a[i]);
//     }
//   }

//   let positiveCount = 0;
//   let negativeCount = 0;
//   for (let i = 0; i < uniqueArray.length; i++) {
//     uniqueArray[i] >= 0 ? positiveCount++ : negativeCount++;
//   }

//   return negativeCount < positiveCount;
// };

// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));  //  false
// console.log(isPositiveDominant([5, 99, 832, -3, -4]));  //  true
// console.log(isPositiveDominant([5, 0]));  //  true
// console.log(isPositiveDominant([0, -4, -1]));  //  false
// console.log(isPositiveDominant([0, -1])); //  false
