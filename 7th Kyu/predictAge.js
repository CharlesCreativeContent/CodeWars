!ans
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
let Age = [age1, age2, age3, age4, age5, age6, age7, age8].map(a=>a**2).reduce((a,b)=>a+b);
return Math.floor(Math.sqrt(Age)/2)
}
