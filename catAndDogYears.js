/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

//Answer//

var humanYearsCatYearsDogYears = function(y) {
switch(y){
  case 1: return [y,15,15]; break;
  case 2: return [y, 24, 24]; break;
  default: return [y, 24+((y-2)*4), 24+((y-2)*5)]

}
}
