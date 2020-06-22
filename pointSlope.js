/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
*/

//Answer//

function slope(points)
{return points[0]===points[2]?'undefined':(points[3]-points[1])/(points[2]-points[0])+''
}
