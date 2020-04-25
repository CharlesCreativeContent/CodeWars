/*
Complete the solution, so that it returns the truncated version of the string followed by '...'.

Example:

solution('Testing String',3) // should return 'Tes...'
solution('Testing String',8) // should return 'Testing ...'
solution('Test',8) // should return 'Test'
/*

//Answer//

function solution(string,limit){
if (limit<string.length){return string.slice(0,limit).padEnd(limit+3,'.')}
else {return string}
}
