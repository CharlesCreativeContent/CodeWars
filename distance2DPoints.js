/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
*/

//Answer//

function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
//OR//
function distanceBetweenPoints(a, b) {
const X = a.x - b.x;
const Y = a.y - b.y;
return  Math.sqrt((X*X) + (Y*Y));
} 
