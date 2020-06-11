/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

//Answer//

var uniqueInOrder=function(i){
return typeof i==='string'?i.split('').filter((x,i,a)=>{if (i===0){return true} else if (x!==a[i-1]){return true} else {return false}}):i.filter((x,i,a)=>{if (i===0){return true} else if (x!==a[i-1]){return true} else {return false}})
}
