!ans

function solution(number){
  var sum = 0;
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

//Or//

function solution(number){
let count = 0
for (let i = 3; i < number ; i+=3) {
if(i%5===0){count+=0}else{count+=i}
} 
for (let i = 5; i < number ; i+=5) {
count+=i
}
return count
}
