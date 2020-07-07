/*
Coding in function ```trueOrFalse```, function accept 1  parameters:```val```, try to use the conditional statement if...else, if ```val``` value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".
*/

//Answer//

let trueOrFalse = val => Boolean(val).toString()

//Or//

let trueOrFalse= val => val?'true':'false'
