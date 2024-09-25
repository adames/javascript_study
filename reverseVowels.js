/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function(s) {

    // every vowel, I add to a stack
    let stack = [];
    
    // I can iterate through the string in a loop to fill stack
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            stack.push(s[i])
        }
    }

    // iterate again, this time replacing vowels from stack 
    let solution = [];
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            solution.push(stack.pop());
        } else {
            solution.push(s[i])
        }
    }

    return solution.join("");
};

let isVowel = (letter) => {
    switch(letter.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}

console.log(isVowel('a') === true);
console.log(isVowel('A') === true);
console.log(isVowel('x') === false);
console.log(isVowel('x') === false);

console.log(reverseVowels("leetcode"));
console.log(reverseVowels("leetcode") === "leotcede");
console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("IceCreAm") === "AceCreIm");