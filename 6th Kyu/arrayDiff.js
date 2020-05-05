!ans

function arrayDiff(a, b) {
if (a===[]||b===[]){return a}
else{
let A = [...a]
for (let i = 0; i < b.length ; i++) {
A=A.filter(x=>x!==b[i])
}
return A
}
}
