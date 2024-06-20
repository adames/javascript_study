// Create a method that reverses a sentence, no punctuation
let sentence = "the quick brown fox jumped over the lazy dog"
if (process.argv.length > 2) {
    sentence = process.argv.slice(2).join(" ");
}
let newSplit= [];
function reverseSentence(sentence) {
    let newSplit = sentence.split(" ");
    for (let index = newSplit.length - 1; index >= 0; index--) {
        reversedSentence.push(newSplit[index]);
    }
    return reversedSentence.join(" ");
}
console.log(reverseSentence(sentence));