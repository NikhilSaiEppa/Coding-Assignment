
// Question 1. 1. Take a sentence as an input and reverse every word in that sentence.
// Example - This is a sunny day > shiT si a ynnus yad.

const sentence = "This is a monday day";
const words = sentence.split(' ');
const reversedWords = words.map(word => {
  return word.split('').reverse().join('');
});
const reversedSentence = reversedWords.join(' ');
console.log(reversedSentence);