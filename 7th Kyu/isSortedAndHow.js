/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

//Answer//

function isSortedAndHow(a) {
switch(true){
case a.every((x,i)=>i===0||x<=a[i-1]): return 'yes, descending'; break;
case a.every((x,i)=>i===0||x>=a[i-1]): return 'yes, ascending'; break;
default: return 'no'
}
}
