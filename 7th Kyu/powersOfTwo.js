!ans
function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
    }
//OR//
function isPowerOfTwo(n){
if (n===0) {return false}else if(n===1||n===2||((n/4)%2===0||(n**(1/2))%2===0)) {return true
}else {return false} 
}
