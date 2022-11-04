/*
  Title:
    Directions Reduction

  Description:
    Once upon a time, on a way through the old wild west,…

    … a man was given directions to go from one point to another.
    The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
    Going to one direction and coming back the opposite direction is a needless effort.
    Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

  Examples:
    The directions given to the man are, for example, the following:
    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

    You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place!
    So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
    ["WEST"]

    Other examples:
    In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
    What a waste of time! Better to do nothing.

    The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [].

    In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

  Task:
      Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

  Notes:
    Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible.
    "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such.
    Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

  Kata Link:
    https://www.codewars.com/kata/directions-reduction

  Discuss Link:
    https://www.codewars.com/kata/directions-reduction/discuss

  Solutions Link:
    https://www.codewars.com/kata/directions-reduction/solutions
*/

function dirReduc(array : string[]) : string[] {
  // Define a type for an indexable type with a string index and a
  // numerical value (check index signatures in the TypeScript handbook)
  type DirectionValue = {
    [index: string]: number
  }
  // Define a value of the above type that is indexed with either a
  // full or an abbreviated direction and returns the "value" of that
  // Note that the value is just an abstraction where opposite directions
  // have the same value but of the opposite sign.
  const value : DirectionValue = {
    WEST: 1, W: 1,
    EAST: -1, E: -1,
    SOUTH: 2, S: 2,
    NORTH: -2, N: -2,
  }

  // Define a variable to keep track of the array length as we are
  // optimizing the direction array
  let lastLength;
  // Keep on assigning the length of the current array to lastLength
  // and loop as long as this length have not reached zero.
  while (lastLength = array.length)
    // In every iteration, reduce the array using a single WEST/EAST
    // or a SOUTH/NORTH optimization and see if the length had decreased
    // If not, terminate the array.
    if (lastLength === array.reduce(
      (acc, _, i, a) => {
        if(value[a[i]] === -value[a[i+1]]) 
          a.splice(i,2); 

        return a;
      }, [...array])
      .length) break;
}
 
// Function Export
module.exports = dirReduc;