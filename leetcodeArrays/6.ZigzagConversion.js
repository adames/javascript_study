// 6. Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

// OK my brute force though is to use Modulo somehow since we're dividing up a string into new parts
// Let's first make a few examples a tests  

// example 1
let testInput = 'PAYPALISHIRING'
let numRows = 3
let success = 'PAHNAPLSIIGYIR'
// example 2
let testInput = 'PAYPALISHIRING'
let numRows = 4
let success = 'PINALSIGYAHRPI'
// example 3
let testInput = 'A'
let numRows = 1
let success = 'A'
