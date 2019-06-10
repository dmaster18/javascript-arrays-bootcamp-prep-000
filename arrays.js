var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(chocolateBars, chocolateBar) {
  var newChocolateBars = [chocolateBar, ...chocolateBars];
  return newChocolateBars;
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, chocolateBar) {
  return chocolateBars.unshift(chocolateBar);
}

function addElementToEndOfArray(chocolateBars, chocolateBar) {
  var newChocolateBars = chocolateBars.push(chocolateBar);
  return newChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, chocolateBar) {
  return chocolateBars.push(chocolateBar);
}