/*
Coding in function ```whatNumberIsIt```. function accept 1 parameter:```n```. it's a number.

To judge the number ```n```. If n is one of the above five constants, return one of these string:

```
"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
```

Other values should return ```"Input number is xxx"```. xxx means this number.

For example:
```
whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
```
What you need to think about is how to judge it correctly and effectively and don't forget isNaN().
*/

//Answer//

let whatNumberIsIt= n => {
switch (true) {
case isNaN(n): return "Input number is Number.NaN"; break;
case !isFinite(n)&&n<0: return "Input number is Number.NEGATIVE_INFINITY"; break;
case !isFinite(n)&&n>0: return "Input number is Number.POSITIVE_INFINITY"; break;
case n===1.7976931348623157e+308: return "Input number is Number.MAX_VALUE" ; break;
case n===5e-324: return "Input number is Number.MIN_VALUE"; 
default: return "Input number is "+n
}
}
