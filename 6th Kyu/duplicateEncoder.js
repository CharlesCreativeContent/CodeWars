/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

//Answer//

function duplicateEncode(word){
//B turns string into array of lowercase letters
let B = word.toLowerCase().split('')

// count filters the array by the given character
let count = x=> {
 return B.filter(y=>x===y).length
}

//C maps the count of the characters to the index of the characters
let C = B.map(count)

//Brackets is a function that returns parantheses for our parameters
let Brackets = (x) => {
return x>1? ')': '('
};

//D maps the Brackets function to our array
let D = C.map(Brackets)

//Our output needs to be a string, so we join our array}
return D.join('')
}
