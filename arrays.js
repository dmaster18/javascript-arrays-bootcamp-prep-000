var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(chocolateBars, chocolateBar) {
  var newChocolateBars = chocolateBars.unshift(chocolateBar);
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateBar) {
  return chocolateBars.unshift(chocolateBar);
}