/*
Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not possible.
*/

//Answer//

function parseF(s) {
return isNaN(s)||typeof s==='boolean'?null:parseFloat(s);
}
