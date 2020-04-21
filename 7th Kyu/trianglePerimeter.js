/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes.
Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

Write a function calculating perimeter of a Triangle defined this way.

Tests round answers to 6 decimal places.
*/

//Answer//

function trianglePerimeter(triangle){
let perimeter = 0;
perimeter += Math.sqrt(((triangle.a.x-triangle.b.x)**2)+((triangle.a.y-triangle.b.y)**2))
perimeter += Math.sqrt(((triangle.a.x-triangle.c.x)**2)+((triangle.a.y-triangle.c.y)**2))
perimeter += Math.sqrt(((triangle.b.x-triangle.c.x)**2)+((triangle.b.y-triangle.c.y)**2))
return perimeter}
