/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

//Answer//

function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

//OR//

function humanReadable(s) {
let H, M, S
if(Math.floor(s/3600)<9){H='0'+Math.floor(s/3600)}else{H=Math.floor(s/3600)};
if(Math.floor(s/60)%60<9){M = '0'+Math.floor(s/60)%60}else{M=Math.floor(s/60)%60}
if(s%60<9){S='0'+s%60}else{S=s%60};
return `${H}:${M}:${S}`
}
