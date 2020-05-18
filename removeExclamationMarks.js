/*
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

//Answer//

const remove = s => s.replace(/!+$/, '');

//OR//

function remove(s){
while(s.lastIndexOf('!')===s.length-1){
s= s.slice(0,s.length-1)
}
return s
}
