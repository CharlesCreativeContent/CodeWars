/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

//Answer//

function toCamelCase(str){
return str.split(/[-_]/gi).map((x,i)=>i===0?x:x[0].toUpperCase()+x.slice(1)).join('')
}
