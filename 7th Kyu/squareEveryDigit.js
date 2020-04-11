/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

//Answer//

function squareDigits(num){
const square = n => n**2
return Number((''+num).split('').map(Number).map(square).join(''))

}


The highest profit wins! - 24th exercise
