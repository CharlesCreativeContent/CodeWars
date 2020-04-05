/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
*/

//Answer//

function doubleChar(str) {
let Str = '';
for(let i=0; i<=str.length-1; i++) {
Str+=str[i].repeat(2);
}
return Str
}
