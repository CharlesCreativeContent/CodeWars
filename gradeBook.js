/*
Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

//Answer//

function getGrade (s1, s2, s3) {
const S = (s1+s2+s3)/3
return  (S<60?'F':S<70?'D':S<80?'C':S<90?'B':'A')
}
