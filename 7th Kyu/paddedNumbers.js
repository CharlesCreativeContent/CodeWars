/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number 

Example:

solution(5) // should return "Value is 00005"
/*

//Answer//

function solution(value){
switch (String(value).length) {
case 1:
return `Value is 0000${value}`;
break;
case 2:
return `Value is 000${value}`;
break;
case 3:
return `Value is 00${value}`;
break;
case 4:
return `Value is 0${value}`;
break;
case 0:
return "Value is 00000";
break;
default: `Value is ${value}`;
}
}
