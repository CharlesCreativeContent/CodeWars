/*
In this kata, you will be the author, and I'm going to challenge your tests.
Your task is to generate random test cases, that accept correct solutions and reject incorrect ones.

Mission 1:

Complete the function randomNumber(), which returns a positive integer between 1 and 9999 (both included).

Mission 2:

The generated random numbers should distribute as described below:

multiple of 3 or 5: 80±5% (range 75%-85%)
divisible by neither 3 nor 5: 20±5% (range 15%-25%)
That is all about what you are going to do. Let's get it started!
*/

//Answer//

function randomNumber(){
let A
if(Math.random()<0.25){
do{
A = Math.ceil(9999*Math.random())
}
while(A%3===0||A%5===0)
}else{
do{
A = Math.ceil(9999*Math.random())
}
while(A%3!==0&&A%5!==0)
}
return A
}
