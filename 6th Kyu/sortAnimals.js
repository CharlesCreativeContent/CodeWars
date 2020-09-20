
/*
Consider the following class:

var Animal = {
    name: "Cat",
    numberOfLegs: 4
}
Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

If null is passed, the method should return null. If an empty list is passed, it should return an empty list back.
*/

//Answer//
const sortAnimal = (animal) =>  animal!==null?animal.sort((a, b) => (a.numberOfLegs > b.numberOfLegs) ? 1 : (a.numberOfLegs === b.numberOfLegs) ? ((a.name > b.name) ? 1 : -1) : -1):animal

//OR//

function sortAnimal(animal) {
return animal===null?animal:animal.sort((a, b) => (a.numberOfLegs > b.numberOfLegs) ? 1 : (a.numberOfLegs === b.numberOfLegs) ? ((a.name > b.name) ? 1 : -1) : -1)
}
