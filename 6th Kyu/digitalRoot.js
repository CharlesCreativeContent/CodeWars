!ans

function digital_root(n) {
  return (n - 1) % 9 + 1;
}

//Or//

function digital_root(n) {
while(n.toString().length>1){
n = n.toString().split('').map(Number).reduce((a, b) => a + b)
}
return n
}
