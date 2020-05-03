!ans

function caffeineBuzz(n){
return n % 12 === 0?"CoffeeScript":n % 6 === 0?"JavaScript":n % 3 === 0?"Java":"mocha_missing!"
}

//OR//

function caffeineBuzz(n){
return n%3===0&&n%4===0?'CoffeeScript':n%3===0&&n%2===0?'JavaScript':n%3===0?'Java':'mocha_missing!'
}
