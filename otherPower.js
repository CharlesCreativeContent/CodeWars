/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power
(ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some others Math functions are disabled on final tests.
*/

//Answer//

const numberToPower = (number, power) =>{
let M = number;
if (power===0) {return 1}
else if (power===1) {return number}
else {for(let i = 0; i < power-1; i++) {M*=number}} 

return M
}
