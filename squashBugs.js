/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value.
Output should be the length of the longest word, as a number.

There will only be one 'longest' word.


*/

//Answer//

function findLongest (str) {
const L = (a,b) => {return b.length-a.length};
return str.split(" ").sort(L)[0].length;
}
