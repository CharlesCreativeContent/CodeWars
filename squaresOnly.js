/*
Be Concise II - I Need Squares
You are given a program squaresOnly that accepts an array of natural numbers up to and including 100 (and including 0) of length >= 1, array, and returns a new array containing only square numbers that have appeared in the input array.

Refactor the solution to use as few characters as possible. There is a maximum character limit of 127.

//Answer//

let squaresOnly=(a)=>a.filter(x=>Number.isInteger(x**(1/2)))
