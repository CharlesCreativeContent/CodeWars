/*
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

//Answer//

function digitize(n) {
const numberDigits = n.toString().split('').reverse();
return (numberDigits).map(Number)
}
