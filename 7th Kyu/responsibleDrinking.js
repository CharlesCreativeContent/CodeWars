/*
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

Examples
"1 beer"  =>  "1 glass of water"
"1 shot, 5 beers and 1 glass of wine"  =>  "7 glasses of water"
Notes
To keep the things simple, we'll consider that anything with a number in front of it is a drink: "1 bear" => "1 glass of water" or "1 chainsaw and 2 pools" => "3 glasses of water"
The number in front of each drink lies in range [1; 9]
/*

//Answer//

function hydrate(s) {
let A = s.split(' ').map(Number).filter(Number).reduce((a,b)=>a+b)
return A===1? `1 glass of water`:`${A} glasses of water` 
}
