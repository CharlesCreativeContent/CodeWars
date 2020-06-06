/*
#Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null or None, your method should return an empty array.
*/

//Answer//

function averages(n) {
return n===null?[]:n.slice(1).map((x,i)=>(x+n[i])/2);
}
