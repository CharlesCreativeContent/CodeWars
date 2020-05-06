!ans

function iqTest(numbers){
if (numbers.split(' ').filter(x=>x%2===0).length===1){
return numbers.split(' ').findIndex(x=>x%2===0)+1
}else{
return numbers.split(' ').findIndex(x=>x%2!==0)+1}
}

//Or//

function iqTest(numbers){
let even = numbers.split(' ').filter(x=>x%2===0)
let odd = numbers.split(' ').filter(x=>x%2!==0)
if (even.length===1){return numbers.split(' ').findIndex(x=>x%2===0)+1}else{return numbers.split(' ').findIndex(x=>x%2!==0)+1}
}
