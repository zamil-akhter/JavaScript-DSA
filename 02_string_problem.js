// ! string = " are6 you5 sh1ow me2 good100 how487 "
// ! o/p:- "show me you are good how"

// let string = " are6 you5 sh1ow me2 good100 how487 "
// let stringWithPosition = {};
// let stringArray = string.trim().split(' ')

// for(let i=0; i<stringArray.length; i++){
//     let strValue = ''
//     let keyValue = ''
//     for(let j=0; j<stringArray[i].length; j++){
//         if(stringArray[i][j] >= 'a' && stringArray[i][j] <= 'z'){
//             strValue += stringArray[i][j]
//         }else{
//             keyValue +=stringArray[i][j]
//         }
//         if(j === stringArray[i].length-1){
//             stringWithPosition[keyValue] = strValue
//         }
//     }
// }
// let outputArray = Object.values(stringWithPosition);
// console.log("output -->>> ",outputArray.join(" "));



// ! s = 'abcdabcdefbb'
// ! output = 6

let s = 'abcdabcdefbb';
let streak = 1;
let maxStreak = 0;
for(let i=1; i<s.length; i++){
  if(s[i].charCodeAt()-s[i-1].charCodeAt() === 1){
    streak++;
  }else if(streak> maxStreak){
    maxStreak = streak;
    streak = 1
  }
}
console.log(maxStreak)