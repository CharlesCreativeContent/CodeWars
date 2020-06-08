/*
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
Note that Python's function name is sum_args, as to avoid confusion with the preexistsing sum function. Ruby's Array#sum has been removed to make it a bit more interesting!
*/

//Answer//

function sum() {
return [...arguments].reduce((a, b) => a + b) 
}
