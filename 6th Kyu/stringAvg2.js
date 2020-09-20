/*
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

//Answer//
function averageString(str) {
  let newStr = str.replace(/zero/g,0).replace(/one/g,1).replace(/two/g,2).replace(/three/g,3).replace(/four/g,4).replace(/five/g,5).replace(/six/g,6).replace(/seven/g,7).replace(/eight/g,8).replace(/nine/g,9)
  let arr = newStr.split(' ')
  console.log(newStr)
  return arr.every(x=>x.length===1)?(''+Math.floor(arr.reduce((a,b)=>+a+ +b,0)/arr.length)).replace(/0/g,'zero').replace(/1/g,'one').replace(/2/g,'two').replace(/3/g,'three').replace(/4/g,'four').replace(/5/g,'five').replace(/6/g,'six').replace(/7/g,'seven').replace(/8/g,'eight').replace(/9/g,'nine'):'n/a'
}
