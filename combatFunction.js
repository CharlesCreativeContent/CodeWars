/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

//Answer//

function combat(h, d) {
return h-d<0?0:h-d
}
