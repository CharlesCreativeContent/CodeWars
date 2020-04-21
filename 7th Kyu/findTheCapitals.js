/*
Instructions
Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

//Answer//

var capitals = function (word) {
let index=[]
let letters = word.split('')
for (let i=0;i<letters.length;i++){
if(letters[i]===letters[i].toUpperCase()){index.push(i)
}}
return index
};
