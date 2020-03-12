/*
Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

//Answer//

function repeatStr (n, s) {
let text = "";
let i = 0;
for (i = 0; i < n; i++) {
  text += s;
}
  return text;
}
