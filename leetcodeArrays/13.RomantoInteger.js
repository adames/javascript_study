// 13. Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

// plans
// OK, this is the opposite of the other. My guess is to do the same as before, but this time we're 
// creating an amount and pulling off letters from the roman numeral string. 

// first, let's create the function, add the map. 
function romanToInteger(romanNumeralString) {
    let map = new Map();
    map.set("I", 1)
    map.set("IV", 4)
    map.set("V", 5)
    map.set("IX", 9)
    map.set("X", 10)
    map.set("XL", 40)
    map.set("L", 50)
    map.set("XC", 90)
    map.set("C", 100)
    map.set("CD", 400)
    map.set("D", 500)
    map.set("CM", 900)
    map.set("M", 1000)
    
    return 0;
}

function stringToNumber(letters) {
    switch (letter) {
        case 'I':
            // if IV, remove one more character and return mapped amount
            // if IX, remove one more character and return mapped amount
            break;
        case 'V':
            break;
        case 'X':
            // if XL, remove one more character and return mapped amount
            // if XC, remove one more character and return mapped amount
            break;
        case 'L':
            break;
        case 'C':
            // if CD, remove one more character and return mapped amount
            // if CM, remove one more character and return mapped amount
            break;
        case 'D':
            break;
        case 'M':
            break;

    }
}

// TESTING
let example1Input = "III"
let example1Output = 3
let example2Input = "LVIII"
let example2Output = 58
let example3Input = "MCMXCIV"
let example3Output = 1994

console.log('example 1 input = ' + example1Input)
console.log('example 1 expected output = ' + example1Output)
console.log('example 1 output = ' + romanToInteger(example1Input))

console.log('example 2 input = ' + example2Input)
console.log('example 2 expected output = ' + example2Output)
console.log('example 2 output = ' + romanToInteger(example2Input))

console.log('example 3 input = ' + example3Input)
console.log('example 3 expected output = ' + example3Output)
console.log('example 3 output = ' + romanToInteger(example3Input))