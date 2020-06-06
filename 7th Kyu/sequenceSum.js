/*
A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms.

For example, some simple patterns include: 3, 6, 9, 12, 15, 18, 21, ...
Pattern: "add 3 to the previous number to get the next number"

0, 12, 24, 36, 48, 60, 72, ...
Pattern: "add 12 to the previous number to get the next number"

How about generating a more complicated pattern?
0, 1, 3, 6, 10, 15, 21, 28, ...
0(0)_,1(0+1),3(0+1+2),6(0+1+2+3)_...
Pattern: "thenth term is the sum of numbers(from 0 ton, inclusive)"

sum_of_n (or SequenceSum.sumOfN in Java, SequenceSum.SumOfN in C#) takes an integer n and returns a List (an Array in Java/C#) of length abs(n) + 1. The List/Array contains the numbers in the arithmetic series produced by taking the sum of the consecutive integer numbers from 0 to n inclusive.

n can also be 0 or a negative value.
Wikipedia reference for abs value is available here.

Example:
5 -> [0, 1, 3, 6, 10, 15]

-5 -> [0, -1, -3, -6, -10, -15]

7 -> [0, 1, 3, 6, 10, 15, 21, 28]
*/

//Answer//

function sumOfN(n) {
let A = []
let count = 0
for (let i = 0; i <= Math.abs(n) ; i++) {
A.push(count+i)
count+=i
}
return n<0?A.map(x=>x>0?+-x:0):A

};
