// This is a regular comment.
//! This is a red comment.
//? This is a blue comment.
//* This is a green comment.
//TODO: This is an orange comment.

//! -----------------------------------------------------------------------------------------

//? *****
//? *****
//? *****
//? *****
//? *****

// let n = 5;
// for(let i=0; i<n; i++){
//     let str = '';
//     for(let j=0; j<n; j++){
//         str += '*';
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//? *
//? **
//? ***
//? ****
//? *****

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = '';
//     for(let j=0; j<i; j++){
//         str += '*';
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//? 1
//? 12
//? 123
//? 1234
//? 12345

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = '';
//     for(j=1; j<=i; j++){
//         str += j;
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//? 1
//? 22
//? 333
//? 4444
//? 55555

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = '';
//     for(let j=1; j<=i; j++){
//         str += i;
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//? *****
//? ****
//? ***
//? **
//? *

// let n=10;
// for(let i=n; i>=1; i--){
//     let str = '';
//     for(let j=1; j<=i; j++){
//         str += '*';
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//? 12345
//? 1234
//? 123
//? 12
//? 1

// let n = 9;
// for(let i=n; i>=1; i--){
//     let str = '';
//     for(let j=1; j<=i; j++){
//         str += j;
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//?     *
//?    ***
//?   *****
//?  *******
//? *********

// let n = 5;
// for(let i=0; i<n; i++){
//     let str = ''
//     for(let j=0; j<=n-i-1; j++){
//         str += ' '
//     }
//     for(let k=0; k< 2*i+1; k++){
//         str += '*'
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//? *********
//?  *******
//?   *****
//?    ***
//?     *

// let n = 5;
// for(let i=0; i<n; i++){
//     let str = ''
//     for(let j=0;j<i;j++){
//         str += ' '
//     }
//     for(let k=0; k< n*2-(2*i+1); k++){
//         str += '*'
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//?     *
//?    ***
//?   *****
//?   *****
//?    ***
//?     *

//! -----------------------------------------------------------------------------------------
//?     1
//?     0 1
//?     1 0 1
//?     0 1 0 1
//?     0 1 0 1 0
//?     1 0 1 0 1 0

// let n = 5;
// let value = 1;

// for(let i = 1; i<=n; i++){
//     let tempValue = '';
//     for(let j=1; j<=i; j++){
//         tempValue += ` ${value}`;
//         value =  value === 1 ? 0: 1;
//     }
//     console.log(tempValue);
// }

//! -----------------------------------------------------------------------------------------
//?     1
//?     0 1
//?     1 0 1
//?     0 1 0 1
//?     1 0 1 0 1

// let n = 5;
// let startValue = 1;
// for(let i = 1; i<=n; i++){
//     let value = startValue;
//     let tempValue = '';
//     for(let j=1; j<=i; j++){
//         tempValue += ` ${value}`;
//         value =  value === 1 ? 0: 1;
//     }
//     console.log(tempValue);
//     startValue =  startValue === 1 ? 0: 1;
// }

//! -----------------------------------------------------------------------------------------
//? 1111
//?  222
//?   33
//?    4

// let n = 4;
// for(let i=0; i<n; i++){
//     let str = '';
//     for(let j=0; j<i; j++){
//         str += ' ';
//     }
//     for(let k=0; k<n-i; k++){
//         str += i+1
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------
//?    1
//?   121
//?  12321
//? 1234321

// let n = 4;
// for(let i=0; i<n; i++){
//     let str = '';
//     for(let j=0; j<n-i-1; j++){
//         str += ' '
//     }

//     for(let k=0; k<i+1; k++){
//         str += k+1;
//     }

//     for(let l=i; l>0; l--){
//         str +=l
//     }
//     console.log(str);
// }



//! -----------------------------------------------------------------------------------------
//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *

// let n=5
// for(let i=0; i<n; i++){
//     let str = ''
//     for(let j=0; j<n-i-1; j++){
//         str +=' '
//     }
//     str+='*'
//     for(k=0; k<2*i-1; k++){
//         str += ' '
//     }
//     if(i!==0){
//         str += '*'
//     }
//     console.log(str);
// }
// for(let i=0; i<n-1; i++){
//     let str = ''
//     for(let j=0; j<i+1; j++){
//         str +=' '
//     }
//     str +='*'
//     for(k=0; k<2*(n-i)-5; k++){
//         str += ' '
//     }
//     if(i !== n-2){
//         str +='*'
//     }
//     console.log(str);
// }


//! -----------------------------------------------------------------------------------------
//?     *
//?     **
//?     ***
//?     ****
//?     *****
//?     ****
//?     ***
//?     **
//?     *

// let n = 10;
// for (let i=1; i<=n; i++){
//     let str = '';
//     for(let j=1; j<=i; j++){
//         str += '*'
//     }
//     console.log(str);
// }
// for(let i=n-1; i>=1; i--){
//     let str = '';
//     for(let j=1; j<=i; j++){
//         str += '*';
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//?     A
//?     AB
//?     ABC
//?     ABCD
//?     ABCDE

// let n = 5;
// for(let i=0; i<n; i++){
//     let charCode = 65;
//     let str = '';
//     for(let k=0; k<=i; k++){
//         str += String.fromCharCode(charCode);
//         charCode ++;
//     }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------

//?     ABCDE
//?     ABCD
//?     ABC
//?     AB
//?     A

// let n = 5;
// for(let i=n; i>=1; i--){
//     let charValue = 65;
//     let str = ''
//     for(let j=0; j<i; j++){
//         str += String.fromCharCode(charValue);
//         charValue++;
//      }
//     console.log(str);
// }

//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------

//! https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/

//! -----------------------------------------------------------------------------------------
//? 1 2 3 4
//? 1 2 3 4
//? 1 2 3 4
//? 1 2 3 4

// let n = 4;
// for(let i=0; i<n; i++){
//     let str = ''
//     for(let j=1; j<=n; j++){
//         str += j;
//     }
//     console.log(str)
// }

//! -----------------------------------------------------------------------------------------
//? A B C D
//? A B C D
//? A B C D
//? A B C D

// let n = 4;
// for(i=0; i<n; i++){
//     let charCode = 65;
//     let str = '';
//     for(let j=1; j<=n ; j++ ){
//         str += String.fromCharCode(charCode)
//         charCode++;
//     }
//     console.log(str);
// }

// console.log(String.fromCharCode());

//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
//! -----------------------------------------------------------------------------------------
