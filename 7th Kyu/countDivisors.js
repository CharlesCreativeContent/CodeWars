!ans
function getDivisorsCnt(n){
if (n===1){return 1}else{
let count = 2;
for (let i = 2; i <= n/2 ; i++) {
if(n%i===0){count++}
} 
return count
}
}
