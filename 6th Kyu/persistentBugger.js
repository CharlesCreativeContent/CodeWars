!ans

function persistence(num) {
let count=0;
while(num>=10){
num = num.toString().split('').reduce((a, b) => a * b) 
count++
}
return count
}
