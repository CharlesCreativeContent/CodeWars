/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

//Answer//

function squareSum(numbers){
const reducer = (a, b) => {return a+b};
const square = x => {return x**2};
return numbers===[]?0:numbers.map(square).reduce(reducer, 0)
}
