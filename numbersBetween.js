/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

//Answer//

function between(a, b) {
return Array(Math.abs(b-a)+1).fill().map((_,i)=>i+a)
}
