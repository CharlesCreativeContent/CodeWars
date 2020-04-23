/*
Write a function that takes an integer and returns an array [A, B, C],
where A is the number of multiples of 3 (but not 5) below the given integer,
B is the number of multiples of 5 (but not 3) below the given integer and
C is the number of multiples of 3 and 5 below the given integer.

For example, solution(20) should return [5, 2, 1]
*/

//Answer//

function solution(number){
let A = [];
let B = [];
let C = [];
for (let i=1; i<number; i++){
if (i%3===0&&i%5!==0){A.push(i)}
if (i%3!==0&&i%5==0){B.push(i)}
if (i%3===0&&i%5===0){C.push(i)}
}
return [A.length,B.length,C.length]
}
