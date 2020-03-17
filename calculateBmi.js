/*
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//Answer//

function bmi(weight, height) {
  const B = weight/(height**2);
  return (B <= 18.5 ? "Underweight" : B <= 25.0 ? "Normal" : B <= 30.0 ? "Overweight" : "Obese")
}
  
//Or//
  
function bmi(weight, height) {
  const H = height**2;
  const B = weight/H;
  if (B <= 18.5) {
  return "Underweight"} 
  else if (B <= 25.0) {
  return "Normal"} 
  else if (B <= 30.0) {
  return "Overweight"} 
  else if (B > 30.0) {
  return "Obese"}
  }
  

  
