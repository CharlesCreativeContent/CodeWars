/*
What we want to implement is a filter function, like Array.filter(),
also similar to the _.filter() in underscore.js and lodash.js.

The usage is quite simple, like:

[1,2,3,4].filter((num)=>{ return num > 3})
should output [4]
*/

//Answer//

Array.prototype.filter = function (num) {
let filtered = [num];
  for(let i = 0; i < this.length; i++) {
    if (num(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered.slice(1,filtered.length)
}
