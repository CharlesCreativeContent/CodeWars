/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//Answer//

function accum(s) {
let S = s.toUpperCase();
let A = [];
for(let i=0; i<s.length;i++){
A.push(S[i]+s[i].toLowerCase().repeat(i))
}
return A.join('-')
}
