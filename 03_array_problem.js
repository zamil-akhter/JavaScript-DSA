// ! https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2
// ! Step 3 : Solve Problems on Arrays [Easy -> Medium -> Hard]
// ! Lec 1: Easy

//! Find the Largest element in an array

// let arr = [2,5,1,3,0];
// // output = 5

// let largestNumber = arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>largestNumber){
//         largestNumber = arr[i]
//     }
// }
// console.log(largestNumber);



// ! Find Second Smallest and Second Largest Element in an array without sorting

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



// ! Check if an Array is Sorted

// let arr = [1,2,3,4,5,6];
// let sorted = true;
// for(let i=1; i<arr.length; i++){
//     if(arr[i] < arr[i-1]){
//         sorted = false;
//         break;
//     }
// }
// console.log(sorted ? 'Sorted' : 'Not sorted');


// !Remove Duplicates in-place from Sorted Array

// Input:
//  arr[1,1,2,2,2,3,3]

// Output:
//  arr[1,2,3,_,_,_,_]

let arr = [1,1,2,2,2,3,3];
for(let i=1; i<arr.length; i++){
    if(arr[i] === arr[i-1]){
        arr.splice(i-1, 1);
        arr.push('_');
    }
}
console.log(arr);















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
        
  