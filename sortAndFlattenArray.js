/*
Coding in function ```bigToSmall```. function accept 1 parameter ```arr```(2D number array). 

Your task is: First to all, refer to the example above, flat output ```arr``` to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string. 

Don't complain about the situation like ```1>1``` is not reasonable, it is just a separator.

Some example:
```
bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"
```
*/

//Answer//

let bigToSmall = A => A.reduce((a, b) => a.concat(b)).sort((a,b)=>b-a).join('>')
