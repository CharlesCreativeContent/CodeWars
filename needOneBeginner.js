/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

//Answer//

function check(a, x) {
  // your code here
  let answer = a.indexOf(x)
  return (answer >= 0 ? true : false)
}
