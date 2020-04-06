/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
*/

//Answer//

function grow(x){
return x.reduce((a,b)=>{return a*b})
}
