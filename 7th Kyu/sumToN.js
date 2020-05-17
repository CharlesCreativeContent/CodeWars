/*
We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

//Answer//

let SequenceSum = { showSequence: (a) =>{
if (a===0){return '0=0'} else if(a<0){return `${a}<0`}else{
return [new Array(a+1).fill().map((x,i)=>i).join('+'), a*(a+1)/2].join(' = ')
}
}
}
