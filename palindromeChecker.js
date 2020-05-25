/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.

Examples
isPalindrome("anna")   ==> true
isPalindrome("walter") ==> false
isPalindrome(12321)    ==> true
isPalindrome(123456)   ==> false
*/

//Answer//

function isPalindrome (l) {
if (''+l===(''+l).split('').reverse().join('')){return true} else {return false}
}
