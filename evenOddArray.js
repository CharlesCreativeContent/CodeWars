/*
Coding in function ```pickIt```, function accept 1 parameter:```arr```, it's a number array, we need traverse ```arr``` by using ```for``` loop, if element is odd number, push it to array ```odd```, if it's a even number, push it to array ```even```.

I've defined two array ```odd``` and ```even``` in the function, and also wrote the return statement. ```your work is write a for loop.```

If you forgot how to push an element to array, please refer to [lesson 4](http://www.codewars.com/kata/571effabb625ed9b0600107a).
*/

//Answer//

let pickIt = arr => {
let e=[], o=[];
for (let i = 0; i < arr.length ; i++) {
arr[i]%2?o.push(arr[i]):e.push(arr[i])
}
return [o,e]
}
