/*
Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]
*/

//Answer//

const reverseSeq = n => {
  return [...new Array(n)].fill().map((x,i)=>i+1).reverse();
};
