/*
Given a string of characters,
I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits. In this case and the case for any non-strings, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56

NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1
*/

//Answer//

function findMiddle(str){
//Verifies str is a string and takes care of edge cases
if (str===[]||str===null||typeof(str)!=='string'){return -1}
if (/\d/.test(str)===false) {return -1}
else {
//Turns string into array of numbers and multiples together
let S = str.replace(/\s/g, '').split('')
for (let i=0; i<S.length; i++){
if (isNaN(S[i])) {S.splice(i,1, 1)
} else {S.splice(i,1, Number(S[i]))}
}
let A = String(S.reduce((a,b)=>a*b, 1))
//Returns Middle Digits of Number
if (A.length%2===0) {return Number(A[((A.length/2)-1)]+A[(A.length/2)])
} else {return Number( A[Math.floor(A.length/2)]) }
}
}
