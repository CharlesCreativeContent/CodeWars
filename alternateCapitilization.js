/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.
Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity
*/

//Answer//

function capitalize(s){
let I = [];
let L = [];
for(let i = 0; i <= s.length-1; i++){
if (i%2===0) {I.push(s[i].toUpperCase()); L.push(s[i])} else {I.push(s[i]; L.push(s[i].toUpperCase())}
};

return [I.join(''), L.join('')]
}
