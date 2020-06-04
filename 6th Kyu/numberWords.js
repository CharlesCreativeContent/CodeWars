/*
Your task is to sort a given string.
Each word in the string will contain a single number.
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string.
The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

//Answer//

function order(words){
let A = Array(words.split(' ').length)
let order = words.split(' ').map(x=>+x.match(/\d+/))
order.map((x,i)=>A.splice( x-1, 1, words.split(' ')[i]))
return A.join(' ')
}
