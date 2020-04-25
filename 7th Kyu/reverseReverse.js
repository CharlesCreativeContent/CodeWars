/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
/*

//Answer//

reverse = function(array) {
let A =[]
array.map(a=>A.splice(0,0,a))
return A
}
