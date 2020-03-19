/*
You are given two angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.
*/

//Answer//

function otherAngle(a, b) {
 const A = a+b;
 return 180-A;
}
