!ans

const repeater = (string, n) => {
  return string.repeat(n);
}

//OR//

function repeater(string, n){return new Array(n).fill(string,0).join('')}
