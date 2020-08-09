!ans
 
function narcissistic(value) {
if(value.toString().split('').map(x=>x**value.toString().length).reduce((a, b) => a + b)===value){
return true}else{return false}
}
