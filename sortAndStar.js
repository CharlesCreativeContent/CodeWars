/*
You will be given a vector of string(s). 
You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.
*/

//Answer//
function twoSort(s) {
const S = s.sort();
return S[0].split('').join('***')
}
