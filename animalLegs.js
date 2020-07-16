/*
Give you a function ```animal```, accept 1 parameter:```obj``` like this:

```
{name:"dog",legs:4,color:"white"}
``` 

and return a string like this:

```
"This white dog has 4 legs."
*/

//Answer//

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}
