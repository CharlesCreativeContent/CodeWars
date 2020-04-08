/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

//Answer//

function descendingOrder(n){
return Number(n.toString().split('').sort('').reverse().join(''));
}
//OR//
function descendingOrder(n){
return Number(n.toString().split('').sort('').reverse().valueOf('').join(''));
}
