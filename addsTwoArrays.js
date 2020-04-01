/*
I'm new to coding and now I want to get the sum of two arrays...
actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

//Answer//

function arrayPlusArray(arr1, arr2) {
const reducer = (a,b) => {return a + b};
  return arr1.reduce(reducer) + arr2.reduce(reducer);
}
