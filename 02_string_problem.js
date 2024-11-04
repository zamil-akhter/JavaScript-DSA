let string = " are6 you5 sh1ow me2 good100 how487 "
// o/p:- "show me you are good how"

let stringWithPosition = {};

let stringArray = string.split(' ')
for(let i=0; i<stringArray.length; i++){
    if(stringArray[i].length === 0){
        stringArray.splice(i,1)
    }
    if(stringArray[i] !== undefined){
        let strValue = ''
        let keyValue = ''
        for(let j=0; j<stringArray[i].length; j++){
            if(stringArray[i][j] >= 'a' && stringArray[i][j] <= 'z'){
                strValue += stringArray[i][j]
            }else{
                keyValue +=stringArray[i][j]
            }
            if(j === stringArray[i].length-1){
                stringWithPosition[keyValue] = strValue
            }
        }

    }
}
let outputArray = Object.values(stringWithPosition);
console.log("output -->>> ",outputArray.join(" "));