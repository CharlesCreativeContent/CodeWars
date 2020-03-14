/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

//Answer//
function abbrevName(name){
let upper = name.toUpperCase();
let justName = upper.split(' ')
return `${justName[0][0]}.${justName[1][0]}`
}
