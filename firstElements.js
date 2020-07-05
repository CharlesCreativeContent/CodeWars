/*
Write a JavaScript function to get the first element of an array. Passing a parameter n (default=1) will return the first n elements of the array. If n == 0 return an empty array ([]);

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/

//Answer//

let first = (arr, n=1) => arr.slice(0,n)

//OR//

function first(arr, n) {
return n?arr.slice(0,n):n===0?[]:[arr[0]]
}
