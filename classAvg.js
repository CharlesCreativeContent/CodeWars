/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

//Answer//

function getAverage(marks){
  const reducer = (a, b) => a + b;
  const M = marks.reduce(reducer, 0);
  return Math.floor(M/marks.length);
}
