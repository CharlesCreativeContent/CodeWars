/*
1 < 2 < 3 === true, right? but can

3 < 2 < 1 === true, too??

Here's your task: write a function greaterThanLessThan with three arguments (a,b,c) that returns a boolean (true or false), such that

a = 1
b = 2
c = 3
returns true, as does

a = 3
b = 2
c = 1
*/

//Answer//

let greaterThanLessThan = (a,b,c) => a<b<c
