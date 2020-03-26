/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

//Answer//

function squareArea(A){
const answer = Math.pow((2*A)/(Math.PI), 2);
return Math.floor(answer*100)/100
}
