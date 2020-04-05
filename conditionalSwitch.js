/*
Complete function ```howManydays```, function accept 1  parameters:```month```,
means the month of year, different month has different days (refer to the following table),
return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
*/

//Answer//

function howManydays(month){
  var days;
  switch (month){
  case 2: days=28; break;
  case 4: case 6: case 9: case 11: days=30; break;
  default: days=31;
  }
  return days;
}
