// *****
// *****
// *****
// *****
// *****

// let n = 5;
// for(let i=0; i<n; i++){
//     let str = '';
//     for(let j=0; j<n; j++){
//         str += '*';
//     }
//     console.log(str);
// }


// --------------------------------------------------------


// *
// **
// ***
// ****
// *****


// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = '';
//     for(let j=0; j<i; j++){
//         str += '*';
//     }
//     console.log(str);
// }


// ----------------------------------------------------------



// 1
// 12
// 123
// 1234
// 12345

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = '';
//     for(j=1; j<=i; j++){
//         str += j;
//     }
//     console.log(str);
// }


// ------------------------------------------------------------------


// 1
// 22
// 333
// 4444
// 55555

// let n = 5;
// for(let i=1; i<=n; i++){
//     let str = '';
//     for(let j=1; j<=i; j++){
//         str += i;
//     }
//     console.log(str);
// }


// -----------------------------------------------------------------------

// *****
// ****
// ***
// **
// *


// let n=10;
// for(let i=n; i>=1; i--){
//     let str = '';
//     for(let j=1; j<=i; j++){
//         str += '*';
//     }
//     console.log(str);
// }


// --------------------------------------------------------------


// 12345
// 1234
// 123
// 12
// 1

// let n = 9;
// for(let i=n; i>=1; i--){
//     let str = '';
//     for(let j=1; j<=i; j++){
//         str += j;
//     }
//     console.log(str);
// }



// ----------------------------------------------------------------------------

//      *
//     ***
//    *****
//   *******
//  *********


let n=5;
for(let i=0; i<n; i++){
    let space = "";
    for(let j=0; j<n-i-1; j++){
        space += " ";
    }
    // space += "A";
    // console.log(space);
    for(let k=0; k<2*i+1; k++){
        space +="A"
    }
    console.log(space);
}










// https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/