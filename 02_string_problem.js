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

// let s = 'abcdabcdefbb';
// let streak = 1;
// let maxStreak = 0;
// for(let i=1; i<s.length; i++){
//   if(s[i].charCodeAt()-s[i-1].charCodeAt() === 1){
//     streak++;
//   }else if(streak> maxStreak){
//     maxStreak = streak;
//     streak = 1
//   }
// }
// console.log(maxStreak)






// ! Reverse only odd length string in a string

// function reverseOddLengthWords(str) {
//   let words = str.split(' ');
//   for(let i=0; i<words.length; i++){
//       if(words[i].length % 2 !== 0){
//           let tempWord = '';
//           for(let j=words[i].length-1; j>=0; j--){
//               tempWord+=words[i][j];
//           }
//           words[i] = tempWord;
//       }
//   }
//   return words.join(' ');
// }
// let inputString = "Write a function to reverse only odd length string";
// console.log(reverseOddLengthWords(inputString));





// ! Valid parenthesis in a string
// const isBalanced = (s) => {
//   const stack = [];
//   const bracketMap = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };
//   const validateBrackets = ["(", "{", "]", ")", "}", "["];

//   for (let i of s) {
//     if (!validateBrackets.includes(i)) {
//       // here i an sending false for non-bracket characters
//       return false;  
//     }
//     if (i === "(" || i === "{" || i === "[") {
//       stack.push(i);
//     } else if (stack.length === 0 || stack.pop() !== bracketMap[i]) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };
// const passingArray = "({}){}";
// console.log(isBalanced(passingArray));




// ! Demo

// const isBalaned = (str) => {
//     let stack = [];
//     let bracketMap = {
//         ")" : "(",
//         "}" : "{",
//         "]" : "["
//     }
//     let brackets = ['(','{','[',')','}',']'];
//     for(let i=0; i<str.length; i++){
//         if(!brackets.includes(str[i])){
//             return false;
//         }else if(str[i] === '(' || str[i] === '{' || str[i] === '['){
//             stack.push(str[i]);
//         }else if(stack.length === 0 || stack.pop() !== bracketMap[str[i]] ){
//             return false
//         }
//     }
    
//     return stack.length === 0;
// }
// let s = '({}) ';
// console.log(isBalaned(s));
