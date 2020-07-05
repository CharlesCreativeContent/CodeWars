/*
In this kata you will have to write a function that takes litres and pricePerLiter as arguments. Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per liter cannot be more than 25 cents. round answer to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
*/

//Answer//

function fuelPrice(l, p) {
let d
l<=1?d=0:l<4&&l>1?d=0.05:l<6?d=0.1:l<8?d=0.15:l<11?d=0.2:d=0.25

return +((p*l)-(d*l)).toFixed(2)
}
