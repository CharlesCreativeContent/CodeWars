!ans

function findNumber(array) {
return ((array.length + 1)*(array.length + 2)/2)-array.reduce((a, b) => a + b, 0)
}
