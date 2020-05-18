/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

#Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

//Answer//

function mxdiflg(a1, a2) {
if (a1.length===0||a2.length===0||a1===null||a2===null){return -1} else{
let A = a1.map(x=>x.length)
let B = a2.map(x=>x.length)
return Math.max(Math.max(...A)-Math.min(...B), Math.max(...B)-Math.min(...A))

}
}
