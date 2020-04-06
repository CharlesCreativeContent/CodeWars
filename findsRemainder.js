/*
Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
*/

//Answer//

function remainder(a, b){
return a===0||b===0?NaN:[a, b].sort((a,b)=>b-a).reduce((a,b)=>a%b)
}
