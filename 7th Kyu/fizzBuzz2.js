!ans

function fizzbuzz(n)
{let N=[]
for (let i = 1; i <= n ; i++) {
if (i%15===0){N.push('FizzBuzz')}
else if (i%5===0) {N.push('Buzz')}
else if (i%3===0) {N.push('Fizz')}
else {N.push(i)}
} 
return N
}
