/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.
*/

//Answer//

const cubeOdd=(a)=>a.every(x=>typeof x==="number")?a.filter(x=>x%2).reduce((a, b) => a + b**3,0):undefined
