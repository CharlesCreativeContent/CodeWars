/*
Take an array and remove every second element out of that array.
Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!
*/

//Answer//

function removeEveryOther(arr){
return arr.filter((_,i)=>!(i%2))
}

//OR//

function removeEveryOther(arr){
return arr.filter((_,i)=>i%2===0)
}
