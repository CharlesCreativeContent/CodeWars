

/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

//Answer//

var greet = function(name) {
return `Hello ${name[0].toUpperCase()}${name.toLowerCase().slice(1)}!`
};
