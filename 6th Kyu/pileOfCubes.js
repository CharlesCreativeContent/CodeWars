!ans

function findNb(m) {
if(m===4||m===16){return -1}
else if(Number.isInteger(2*(m**(1/2)))){return Math.floor(Math.sqrt(2*(m**(1/2))))}
else {return -1}
}
