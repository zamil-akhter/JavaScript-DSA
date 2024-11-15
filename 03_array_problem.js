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

// const arr = [2,5,1,3,0];
// let largestNumber = arr[0];
// let secondLargestNumber = arr[0];
// let smallestNumber = arr[0];
// let secondSmallestNumber = arr[0];
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
// console.log('secondLargestNumber ---->', secondLargestNumber);
// console.log('secondSmallestNumber ---->', secondSmallestNumber);

// ! 3. Check if an Array is Sorted

// let arr = [1,2,3,4,5,6];
// let sorted = true;
// for(let i=1; i<arr.length; i++){
//     if(arr[i] < arr[i-1]){
//         sorted = false;
//         break;
//     }
// }
// console.log(sorted ? 'Sorted' : 'Not sorted');

// ! 4. Remove Duplicates in-place from Sorted Array

// Input:
//  arr[1,1,2,2,2,3,3]

// Output:
//  arr[1,2,3,_,_,_,_]

// let arr = [1,1,2,2,2,2,2,2,2,3,3];
// let index = 1;
// for(let i=1; i<arr.length; i++){
//     if(arr[i] === arr[i-1]){
//         arr.splice(i, 1);
//         i--;
//     }
// }
// console.log(arr);

// ! Left Rotate the Array by One

// ! Input:
// ! N = 5, array = [1,2,3,4,5]
// ! Output:
// ! [2,3,4,5,1]

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (i === 0) {
//     lastNumber = arr[0];
//   } else if (i > 0 && i < arr.length) {
//     arr[i - 1] = arr[i];
//     if (i === arr.length - 1) {
//       arr[i] = lastNumber;
//     }
//   }
// }
// console.log(arr);










// ! four distinct value, no integer repeat twice consecutively among first twenty entries
// let a = [1,2,3,4, 1,2,3,4, 1,2,3,4, 1,2,3,4]    // true
// let a = [1,2,3,3, 1,2,3,3, 1,2,3,3, 1,2,3,3]    // true
// let a = [1,2,3, 1,2,3, 1,2,3, 1,2,3, 1,2,3]    // true

// let streakOfFour = 0
// for(let i=0; i<a.length; i++){
//     console.log(a[i],'-------',a[i-1]+1);

// if(a[i] === a[i+1]-1){
//     streakOfFour ++
// }else{
//     streakOfFour = 0
// }
// if(streakOfFour === 4){
//     console.log('streak--------->>>>',streakOfFour);

// }

// }

// ! merge two shorted array without extra space

// let a = [1,4,8,10]
// let b = [2,3,9]

// for(let i=0; i<a.length; i++){
//     if(a[i]>b[0]){
//         a.splice(i, 0, b[0]);
//         b.shift();
//     }
// }

// console.log(a)

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



// ! Random

let arr = [
    {
      id: 13455,
      name: "Manish",
      rId: 85,
      date_range_to: "2024-11-05",
      date_range_from: "2024-11-01",
    },
    {
      id: 13455,
      name: "Manish",
      rId: 86,
      date_range_to: "2024-11-10",
      date_range_from: "2024-11-06",
    },
    {
      id: 13459,
      name: "Rahul",
      rId: 87,
      date_range_to: "2024-11-01",
      date_range_from: "2024-11-01",
    },
    {
      id: 13454,
      name: "Raj",
      rId: 88,
      date_range_to: "2024-11-01",
      date_range_from: "2024-11-01",
    },
  ];
  
//   OUTPUT[
//     ({
//       id: 13455,
//       name: "Manish",
//       rIds: [85, 86],
//       date_range_from: "2024-11-01",
//       date_range_to: "2024-11-10",
//     },
//     {
//       id: 13459,
//       name: "Rahul",
//       rIds: [87],
//       date_range_from: "2024-11-01",
//       date_range_to: "2024-11-10",
//     },
//     {
//       id: 13454,
//       name: "Raj",
//       rIds: [88],
//       date_range_from: "2024-11-01",
//       date_range_to: "2024-11-10",
//     })
//   ];
  
// const a = new Date("2024-11-01");
// const b = new Date("2024-11-02");
// console.log(a);
// console.log(b);
// console.log(b-a);

// let demoObj = [];
// demoObj.push(arr[0]);
// for(let i=0; i<arr.length;i++){
//     // console.log(arr[i]);
//     for(let value in arr[i]){
//         console.log(value,'-------------',arr[i][value]);
      
//     }
    
// }
// console.log("demoObj",demoObj);

