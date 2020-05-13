/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

//Answer//

function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

//OR//

function duplicateCount(text){
//B turns string into array of lowercase letters
let B = text.toLowerCase().split('')

//C makes an array with the unique elements from B
let C = [...new Set (B)]

// count filters the array by the given character
let count = x=> {
 return B.filter(y=>x===y).length
}

//C maps the count of the characters in text
let D = C.map(count)

//returns the count of characters greater than 1
return D.filter(x=>x>1).length
}
