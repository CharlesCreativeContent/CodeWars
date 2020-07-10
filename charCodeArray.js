/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

//Answer//

let isVow = a => a.map(x=>x===117?'u':x===101?'e':x===97?'a':x===105?'i':x===111?'o':x)
