// Here are the functions:

// 1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// const maxOfTwoNumbers = (x, y) => {
//     if (x >= y) {
//         return x;
//     } else {
//         return y;
//     }

//     // or more "elegantly" using the fantastic ternary expression!
//     // return  x >= y ? x : y;
// }

// console.log(maxOfTwoNumbers(3, 9));

// 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// const maxOfThree = (x, y, z) => {
//     // using ternary: 
//     return x >= y || x >= z ? x
//         : y >= z ? y
//             : z
//     // using if-else:
//     //   if (x >= y || x >= z) {
//     //       return x
//     //   } else if (y >= z) {
//     //       return y
//     //   } else {
//     //       return z
//     //   }
// }

// console.log(maxOfThree(15, 12, 30));

// 3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

// const isCharAVowel = (character) => {
//     if (character.match(/[aeiou]/gi)) {
//         return true
//     }
//     return false
// }

// console.log(isCharAVowel('z'));

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

// const sumArray1 = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// // OR
// const sumArray2 = (arr) => {
//     let sum = 0
//     arr.forEach(num => sum += num)
//     return sum
// }

// console.log(sumArray1([1, 2, 3, 6, 8]))
// console.log(sumArray2([1, 2, 3, 6, 8]))

// 5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// const multipleArray = (arr) => {
//     let multiply = 1
//     arr.forEach(num => multiply *= num)
//     return multiply
// }

// console.log(multipleArray([1, 2, 3, 4, 5]))

// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

// const numArgs = (...args) => {
//     return args.length
// }

// console.log(numArgs(1, 2, 3, 4, 5))

// 7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// const reverseString = string => string
//   .split('')
//   .reverse()
//   .join('')

// console.log(reverseString('pneumonoultramicroscopicsilicovolcanoconiosis'))

// 8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

// const longestStringInArray = (arr) => {
//     let firstStr = ''
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length > firstStr.length) {
//         firstStr = arr[i]
//       }
//     }
//     return firstStr.length
//   }

//   console.log(longestStringInArray(["baboon", "cat", "dog", "chicken", "pneumonoultramicroscopicsilicovolcanoconiosis"]))

// 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

const stringsLongerThan = (arr, num) => {
    longerStr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > num) {
            longerStr.push(arr[i])
        }
    }
    return longerStr
}

console.log(stringsLongerThan(['Where', 'is', 'your', 'sense', 'of', 'adventure', '...', 'I', 'feel', 'no', 'shame!'], 4))