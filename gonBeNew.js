// Create a method that reverses a sentence, no punctuation
let sentence = "the quick brown fox jumped over the lazy dog"
if (process.argv.length > 2) {
    sentence = process.argv.slice(2).join(" ");
}

let function sentenceBackwards(sentence) {
}


console.log(sentenceBackwards(sentence));