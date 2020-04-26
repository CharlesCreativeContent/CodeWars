/*
In this kata you should simply determine, whether a given year is a leap year or not.
In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.
*/

//Answer//

function isLeapYear(year) {
return year%400===0?true:year%100===0?false:year%4===0?true:false
}
