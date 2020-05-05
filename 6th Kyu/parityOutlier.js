!ans

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

//Or//

function findOutlier(integers){
if (integers.filter(x=>x%2===0).length===1){return integers.filter(x=>x%2===0)[0]}else{return integers.filter(x=>x%2===1||x%2===-1)[0]}
}
