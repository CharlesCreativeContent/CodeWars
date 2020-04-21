/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

//Answer//

function findSum(n) {
let N = [];
for(let i=0;i<=n;i++) {
if(i%3===0||i%5===0){N.push(i)}
}
return N.reduce((a,b)=>a+b)
} 
