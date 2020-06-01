/*
Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
 "Programmer"	 "Hipster Craft Beer"
 "Bike Gang Member"	"Moonshine" 
 "Politician"	"Your tax dollars" 
 "Rapper"	"Cristal" 
 *anything else*	"Beer" 
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".
*/

//Answer//

function getDrinkByProfession(p){
switch(p.toLowerCase()){
case 'jabroni': return 'Patron Tequila'; break;
case 'school counselor': return 'Anything with Alcohol'; break;
case 'programmer': return 'Hipster Craft Beer'; break;
case 'bike gang member': return 'Moonshine'; break;
case 'politician': return 'Your tax dollars'; break;
case 'rapper': return 'Cristal';break;
default: return 'Beer'
}
}
