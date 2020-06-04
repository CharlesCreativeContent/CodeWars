/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

//Answer//

function findLongest(array){
return +array.map(String).sort((a,b)=>b.length-a.length)[0]
}
