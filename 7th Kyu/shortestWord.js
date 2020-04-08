/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//Answer//

function findShort(s){
const L = (a, b) => {return a.length - b.length}
return s.split(' ').sort(L)[0].length
}
