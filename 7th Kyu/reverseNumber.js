/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

//Answer//
let reverseNumber=(n)=> n<0?+('-'+n.toString().split('').reverse().slice(0,n.toString().length-1).join('')):+n.toString().split('').reverse().join('')
