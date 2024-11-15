// ! Two consecutive Occurance of 19

const checkOccuranceOfNineteen = () => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1] && arr[i] === 19) {
      return true;
    }
  }
  return false;
};
const arr = [12, 23, 19, 19, 5, 6, 19];
// console.log(checkOccuranceOfNineteen(arr));

// ! four consecutive number

function checkArray(arr1) {
  let pattern = [arr1[0], arr1[1], arr1[2], arr1[3]];

  if (arr1.length % 4 !== 0) {
    return false;
  }

  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] - pattern[i - 1] !== 1) {
      return false;
    }
  }

  for (let i = 0; i < arr1.length; i += 4) {
    for (let j = 0; j < 4; j++) {
      if (arr1[i + j] !== pattern[j]) {
        return false;
      }
    }
  }

  return true;
}

// console.log(checkArray([4,5,6,7,4,5,6,7])); // True
// console.log(checkArray([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4])); // Output: True
// console.log(checkArray([1,2, 3, 4, 1,2,3,4])); // Output: True
// console.log(checkArray([1, 2, 3, 3, 1, 2, 3, 3, 1, 2, 3, 3])); // Output: False
// console.log(checkArray([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3])); // Output: False

// ! Validate Parenthesis

const isValid = (s) => {
  const stack = [];

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let i of s) {
    if (i === "(" || i === "{" || i === "[") {
      stack.push(i);
    } else if (stack.length === 0 || stack.pop() !== bracketMap[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

const passingArray = ["[", "{", "}", "]"];
// console.log(isValid(passingArray));

// ! check unique Positive Dominant

const isPositiveDominant = (a) => {
  let uniqueArray = [];
  for (let i = 0; i < a.length; i++) {
    if (!uniqueArray.includes(a[i])) {
      uniqueArray.push(a[i]);
    }
  }

  let positiveCount = 0;
  let negativeCount = 0;
  for (let i = 0; i < uniqueArray.length; i++) {
    uniqueArray[i] >= 0 ? positiveCount++ : negativeCount++;
  }

  return negativeCount < positiveCount;
};

// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));  //  false
// console.log(isPositiveDominant([5, 99, 832, -3, -4]));  //  true
// console.log(isPositiveDominant([5, 0]));  //  true
// console.log(isPositiveDominant([0, -4, -1]));  //  false
// console.log(isPositiveDominant([0, -1])); //  false