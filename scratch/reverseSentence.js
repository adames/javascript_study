// Create a method that reverses a sentence, no punctuation
let sentence = "the quick brown fox jumped over the lazy dog"
if (process.argv.length > 2) {
    sentence = process.argv.slice(2).join(" ");
}
let reversedSentence= [];
function reverseSentence(sentence) {
    let splitSentence = sentence.split(" ");
    for (let index = splitSentence.length - 1; index >= 0; index--) {
        reversedSentence.push(splitSentence[index]);
    }
    return reversedSentence.join(" ");
}
console.log(reverseSentence(sentence));