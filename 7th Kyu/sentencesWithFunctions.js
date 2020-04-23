/*
Implement all required functions in order to create the following sentences by calling those functions:

Adam(has(a(dog()))); // must return "Adam has a dog."
The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
*/

//Answer//

function Adam(string) {return string==null?'Adam.': 'Adam '+string}
function has(string) {return 'has '+string}
function a(string) {return 'a '+string}
function dog(string) {return string==null?'dog.': 'dog '+string}
function The(string) {return 'The '+string}
function name(string) {return 'name '+string}
function of(string) {return 'of '+string}
function the(string) {return 'the '+string}
function is(string) {return 'is '+string}
function also(string) {return 'also '+string}
