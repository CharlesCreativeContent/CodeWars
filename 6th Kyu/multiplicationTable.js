/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

//Answer//

multiplicationTable = function(size) {
let A = [...new Array(size).keys()].map(x=>x+1)
return A.map(x=>A.map(y=>y*x))
}
