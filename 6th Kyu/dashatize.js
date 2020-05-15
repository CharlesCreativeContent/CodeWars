/*
Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

//Answer//

function dashatize(num) {
if(isNaN(num)){return "NaN"}else if(num<=9&&num>=-9){return ''+Math.abs(num)}else{
return[...(''+Math.abs(num)).split('')].map(Number).map((x,i,a)=>{if(x%2===1&&i===0){return `${x}-`}else if(x%2===1&&a[i-1]%2===1&&i!==a.length-1){return `${x}-`}else if(x%2===1&&a[i-1]%2!==1&&i!==a.length-1){return `-${x}-`}else if(x%2===1&&a[i-1]%2!==1&&i===a.length-1){return `-${x}`}else{return x}}).join('')
}}
