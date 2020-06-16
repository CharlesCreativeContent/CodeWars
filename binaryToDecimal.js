/*
Complete the function which converts a binary number (given as a string) to a decimal number.
*/

//Answer//

function binToDec(bin){
  return parseInt(bin,2);
}

//OR//

function binToDec(bin){
return bin.split('').reverse().map((x,i)=>x*(2**i)).reduce((a, b) => a + b)
}
