!ans

function isValidWalk(walk) {
if (walk.filter(x=>x==='n').length!==walk.filter(x=>x==='s').length||walk.filter(x=>x==='e').length!==walk.filter(x=>x==='w').length||walk.length!==10){
return false
}else{return true}
}
 
