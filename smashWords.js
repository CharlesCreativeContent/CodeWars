/*
Sentence Smash
Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
var words = ['hello', 'world', 'this', 'is', 'great'];
smash(words); // returns "hello world this is great"
Assumptions
You can assume that you are only given words.
You cannot assume the size of the array.
You can assume that you will always get an array.
We're testing loops and string manipulation. 
*/

//Answer//

function smash (words) {
return  words.join(' ');
}
