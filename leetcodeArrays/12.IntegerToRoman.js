// 12. Integer to Roman
// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. 
// Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted 
// from the input, append that symbol to the result, subtract its value, and convert the remainder to a 
// Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the 
// following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. 
// Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. 
// You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the 
// subtractive form.
// Given an integer, convert it to a Roman numeral.

// Example 1:

// Input: num = 3749

// Output: "MMMDCCXLIX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
// Example 2:

// Input: num = 58

// Output: "LVIII"

// Explanation:

// 50 = L
//  8 = VIII
// Example 3:

// Input: num = 1994

// Output: "MCMXCIV"

// Explanation:

// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV
 

// Constraints:

// 1 <= num <= 3999

/**
 * @param {number} num
 * @return {string}
 */

let intToRoman = function(num) {

    let romanAnswer = ""

    let map = new Map();
        map.set(1, "I")
        map.set(4, "IV")
        map.set(5, "V")
        map.set(9, "IX")
        map.set(10, "X")
        map.set(40, "XL")
        map.set(50, "L")
        map.set(90, "XC")
        map.set(100, "C")
        map.set(400, "CD")
        map.set(500, "D")
        map.set(900, "CM")
        map.set(1000, "M")

    let romanNumeralsArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    for (let i = 0; i < romanNumeralsArray.length; i++) {
        while (romanNumeralsArray[i] <= num) {
            romanAnswer += map.get(romanNumeralsArray[i])
            num -= romanNumeralsArray[i];
        }
    }

    return romanAnswer
}


// test 1
// Input: num = 3749
// Output: "MMMDCCXLIX"
console.log("input: " + 3749)
console.log("expected output: MMMDCCXLIX")
console.log("output: " + intToRoman(3749))
console.log(intToRoman(3749) === "MMMDCCXLIX")


// test 2
// Input: num = 58
// Output: "LVIII"
console.log("input: " + 58)
console.log("expected output: LVIII")
console.log("output: " + intToRoman(58))
console.log(intToRoman(58) === "LVIII")

// test 3
// Input: num = 1994
// Output: "MCMXCIV"
console.log("input: " + 1994)
console.log("expected output: MCMXCIV")
console.log("output: " + intToRoman(1994))
console.log(intToRoman(1994) === "MCMXCIV")