/*
Basic regex tasks. Write a function that takes in a numeric code of any length.
The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.
*/

//Answer//

function validateCode (code) {
switch (code.toString()[0]){
case '1': return true;
break;
case '2': return true;
break;
case '3': return true;
break;
default: return false;
}}
