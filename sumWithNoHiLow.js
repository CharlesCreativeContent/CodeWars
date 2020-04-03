/*
Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
(The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

Example:

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

If array is empty, null or None, or if only 1 Element exists, return 0.
Note:In C++ instead null an empty vector is used. In C there is no null. ;-)


-- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
*/

//Answer//

function sumArray(array) {
if (array===[]||array===null||array.length===1) {return  0}
else {
const reducer = (a, b) => {return a+b};
let Sort = array.sort((a, b) => {return a - b});
Sort[0]=0;
Sort[Sort.length -1] = 0;
return Sort.reduce(reducer);
}
}
