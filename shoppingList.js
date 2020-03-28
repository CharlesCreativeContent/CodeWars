/*
You are in charge of ordering food for a party. You are going to need 4 sandwiches, 6 salads, 5 wraps, and 10 orders of french fries. The cost per item of food is:

food	price
sandwich	$8.00
salad	$7.00
wrap	$6.50
french fries	$1.20
Create 4 variables to store the quantity of each type of food with the following names:

sandwiches
salads
wraps
frenchFries
Create a variable named totalPrice that finds the cost of all of the food.
*/

//Answer//

const [sandwiches, salads, wraps, frenchFries]  = [4, 6, 5, 10];
let totalPrice = (sandwiches * 8.00) + (salads * 7.00) + (wraps * 6.50) + (frenchFries * 1.20);
    
const sandwiches = 4;
const salads = 6;
const wraps = 5;
const frenchFries = 10;
const a = 8 * `${sandwiches}`
const b = 7 * `${salads}`
const c = 6.5 * `${wraps}`
const d = 1.2 * `${frenchFries}`
let totalPrice = a + b + c + d
