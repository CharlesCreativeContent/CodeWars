/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

//Answer//

function solution(str){
   return (str + "_").match(/../g)||[];
}

//Or//

function solution(str){
if(str.length%2!==0){str+='_'}
let S = []
for(let i = 0; i<str.length ; i+=2){
S.push(str[i]+str[i+1])
}
return S
}
