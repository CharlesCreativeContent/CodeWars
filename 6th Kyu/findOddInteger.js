!ans

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//Or//

function findOdd(A) {
for (let i = 0; i < A.length ; i++) {
if(A.filter(x=>x===A[i]).length%2!==0){return A[i]}
} 
}
