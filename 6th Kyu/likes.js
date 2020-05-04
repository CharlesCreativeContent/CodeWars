!ans

function likes(names) {
let A
if (names.length===0){A='no one likes this'
}else if(names.length===1){A=names[0]+' likes this'
}else if(names.length===2){A=names[0]+' and '+names[1]+' like this'
} else if(names.length===3){A=names[0]+', '+names[1]+' and '+names[2]+' like this'
} else{A=names[0]+', '+names[1]+' and '+(names.length-2)+' others like this'}
return A
}
