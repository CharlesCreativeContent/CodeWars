/*
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

//Answer//

function halvingSum(n) {
let A = []
let count = 1
while(Math.floor(n/count)>0){
A.push(Math.floor(n/count))
count *= 2
}
return A.reduce((a, b) => a + b)
}
