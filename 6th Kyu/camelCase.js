/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.
All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

//Answer//

String.prototype.camelCase=function(){
if(this==''){return''}else{
return this.trim().split(' ').map(x=>x[0].toUpperCase()+x.slice(1,x.length)).join('')
}
}
