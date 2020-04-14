/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values )
*/

//Answer//

function noOdds( values ){
let I = []
for(let i = 0; i <= values.length-1; i++){
if (values[i]%2===0) {I.push(i)}
}
return I
}
