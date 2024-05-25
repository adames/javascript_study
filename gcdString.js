// Greatest common denominator of a string

let gcdOfStrings = function(str1, str2) {
    if (str1.length > str2.length) {
        return gcdOfStrings(str2, str1);
    }

    if (str1 === str2) {
        return str1;
    }

    if (str2.startsWith(str1)) {
        return gcdOfStrings(str2.substring(str1.length), str1);
    }

    return "";
};

const example1 = {key: "ABCABC", value: "ABC"};
const result1 = "ABC";

const example2 = {key: "ABABAB", value: "ABAB"};
const result2 = "AB";

const example3 = {key: "LEET", value: "CODE"};
const result3 = "";

console.log(gcdOfStrings(example1.key, example1.value));
console.log(gcdOfStrings(example2.key, example2.value));
console.log(gcdOfStrings(example3.key, example3.value));

