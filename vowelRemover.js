/*
Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.
*/

//Answer//

function shortcut(string){
return string.replace(/a/g,'').replace(/e/g,'').replace(/i/g,'').replace(/o/g,'').replace(/u/g,'')
}
