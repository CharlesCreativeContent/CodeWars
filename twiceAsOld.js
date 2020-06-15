/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

//Answer//

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//OR//

function twiceAsOld(d, s) {
let y = 0
while(d/2!==s){
if(d/2<s){
d--;
s--;
y++
}else{
d++;
s++;
y++}
}
return y
}
