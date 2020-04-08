/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

//Answer//

function XO(str) {
const Str = str.split('')
const A = a => {return a === 'x'||a==='X'};
const B = b => {return b === 'o'||b==='O'};
return (Str.filter(A).length === Str.filter(B).length? true:false)
}
