// Create a method that reverses a sentence, no periods

const sentence = "the quick brown fox jumped over the lazy dog"
let newSentence = [];
function reverseSentence(sentence) {
    let splitSentence = sentence.split(" ");
    for (let index = splitSentence.length - 1; index >= 0; index--) {
        newSentence.push(splitSentence[index]);
    }
    return newSentence.join(" ");
}
console.log(reverseSentence(sentence));