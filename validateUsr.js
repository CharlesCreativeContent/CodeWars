/*
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).
*/

//Answer//

let validateUsr = u => /^[0-9a-z_]{4,16}$/.test(u)

//OR//

let validateUsr= u => u.length>=4&&u.length<=16&&(/^[a-z_0-9]/g).test(u)&&!(/\s/).test(u)
