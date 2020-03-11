/*
Given an array of integers your solution should find the smallest integer.
For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this exercise, that the supplied array will not be empty.
*/

//Answer//

class SmallestIntegerFinder {
  findSmallestInt(args) {
const min = (a, b) => {return a-b}
args.sort(min);
return args[0];}
}

//Or//

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
