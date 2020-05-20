/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

//Answer

var countSheep = function (n){
return [...Array(n).keys()].map(x=>`${x+1} sheep...`).join('')
}
