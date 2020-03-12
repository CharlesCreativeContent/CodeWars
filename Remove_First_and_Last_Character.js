/*
Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

//Answer//

function removeChar(str){
 const res = str.slice(1, -1);
 return res;
};
