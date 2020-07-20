/*
In case you got lost, here's precisely what you have to do: define a method Number.prototype.times that accepts a function f as an argument and executes it as many times as the integer it is called on (e.g. (100).times would execute something 100 times). The iteration variable i should be supplied to the anonymous function being executed in order to support looping through array elements.
*/

//Answer//

Number.prototype.times = function (f) {
for (let i = 0; i < this ; i++) {
f(i)
}
}
