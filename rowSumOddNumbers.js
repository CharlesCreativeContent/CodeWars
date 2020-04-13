/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

//Answer//

function rowSumOddNumbers(n) {
let N = []
for(let i =(n**2)-n+1; i <= ((n**2)+n-1); i+=2) {
N.push(i)
};
const reducer = (a, b) => {return a+b}
return N.reduce(reducer)
}
