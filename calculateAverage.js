/*
Write function avg which calculates average of numbers in given list.
*/

//Answer//

function find_average(array) {
  const reducer = (a, b) => a + b;
  return array.reduce(reducer)/array.length;
}
