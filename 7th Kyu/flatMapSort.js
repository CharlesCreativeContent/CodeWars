!ans

function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}

/OR//

function flattenAndSort(array) {
let N=[]
array.map(x=>N.push(...x));
  return N.sort((a,b)=>a-b)
}
